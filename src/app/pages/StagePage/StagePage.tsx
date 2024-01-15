/** @format */

import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Molecules/Breadcrumb/Breadcrumb";
import Layout from "../../components/Template/Layout/Layout";
import domtoimage from "dom-to-image";
import StageButtons from "../../components/Molecules/StageButtons/StageButtons";
import NextStage from "../../components/Molecules/NextStage/NextStage";
import { useEffect } from "react";
import TwoColumnsGrid from "../../components/Template/TwoColumnsGrid/TwoColumnsGrid";
import StageDescriptionCard from "../../components/Organisms/StageDescriptionCard/StageDescriptionCard";
import StepCards from "../../components/Organisms/StepCards/StepCards";

const StagePage = () => {
    const { t } = useTranslation();
    const { dungeonCode, stageNumber, universeCode } = useParams();
    const { pathname } = useLocation();
    const universes: Array<any> = t("universes", { returnObjects: true });
    const currentUniverse = universes.find((universe) => universe.code === universeCode);
    const currentDungeon = currentUniverse?.dungeons.find((dungeon) => {
        if (dungeon.code === dungeonCode) {
            return true;
        }
    });

    const currentStage = currentDungeon?.stages[Number(stageNumber) - 1];
    const nextStage = currentDungeon?.stages[Number(stageNumber)];
    const universeBaseUrl = `/universe/${universeCode}`;
    const dungeonBaseUrl = `${universeBaseUrl}/dungeon/${dungeonCode}`;

    const exportToPng = () => {
        const currentStage = document.getElementById("stage-card");
        domtoimage
            .toPng(currentStage, { quality: 0.99 })
            .then((dataUrl) => {
                const binary_string = window.atob(dataUrl.replace("data:image/png;base64,", ""));
                const len = binary_string.length;
                const bytes = new Uint8Array(len);
                for (var i = 0; i < len; i++) {
                    bytes[i] = binary_string.charCodeAt(i);
                }
                const t = new Uint8Array(bytes.buffer);
                parent.postMessage({ pluginMessage: { type: "paste-stage", imageData: t } }, "*");
            })
            .catch(function (error) {
                console.error("oops, something went wrong!", error);
            });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Layout>
            <Breadcrumb
                linksData={[
                    { url: "/home", label: t("universesLabel") },
                    { url: universeBaseUrl, label: currentUniverse.title },
                    { url: dungeonBaseUrl, label: currentDungeon.title },
                ]}
            />
            <TwoColumnsGrid id="stage-card">
                <StageDescriptionCard
                    title={currentStage.title}
                    description={currentStage.description}
                />
                <StepCards steps={currentStage.steps} />
            </TwoColumnsGrid>
            <StageButtons
                stageNumber={stageNumber}
                exportToPng={exportToPng}
            />
            {currentStage.difficulty === "hard" && <div></div>}
            {/* <DescriptionStageCard
                title={currentStage.title}
                description={currentStage.description}
                steps={currentStage.steps}
            /> */}
            {Number(stageNumber) < currentDungeon.stages.length && (
                <NextStage
                    title={nextStage.title}
                    url={`${dungeonBaseUrl}/stage/${(Number(stageNumber) + 1).toString()}`}
                />
            )}
        </Layout>
    );
};

export default StagePage;
