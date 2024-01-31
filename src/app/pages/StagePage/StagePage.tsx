/** @format */

import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import NextStage from "../../components/Molecules/NextStage/NextStage";
import { useEffect } from "react";
import TwoColumnsGrid from "../../components/Template/TwoColumnsGrid/TwoColumnsGrid";
import StageDescriptionCard from "../../components/Organisms/StageDescriptionCard/StageDescriptionCard";
import StepCards from "../../components/Organisms/StepCards/StepCards";
import TipsCard from "../../components/Molecules/TipsCard/TpsCard";
import "./StagePage.style.scss";
import Layout from "../../components/Template/Layout/Layout";

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const getCurrentStage = () => {
        let stageComponent = <></>;
        switch (currentStage.type) {
            case "tips":
                stageComponent = currentStage.tips?.length > 0 ? <TipsCard tips={currentStage.tips} /> : <></>;
                break;
            case "steps":
                stageComponent = currentStage.steps?.length > 0 ? <StepCards steps={currentStage.steps} /> : <></>;
                break;
            default:
                break;
        }
        return stageComponent;
    };
    const universeImg = require(`../../assets/universes/background_${currentUniverse.code}.png`)?.default;

    return (
        <Layout
            breadcrumbLinks={[
                { url: "/home", label: t("universesLabel") },
                { url: universeBaseUrl, label: currentUniverse.title },
                { url: dungeonBaseUrl, label: currentDungeon.title },
            ]}
            containerProps={{
                style: {
                    backgroundImage: `url(${universeImg})`,
                    height: `612px`,
                    // height:"300px",
                    padding: "40px",
                },
            }}
        >
            <TwoColumnsGrid
                id="stage-card"
                customClassName="stage-page-two-columns"
            >
                <div className="stage-description-container">
                    <StageDescriptionCard
                        title={currentStage.title}
                        description={currentStage.description}
                    />
                </div>
                {getCurrentStage()}
                {/* <StepCards steps={currentStage.steps} /> */}
            </TwoColumnsGrid>
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
