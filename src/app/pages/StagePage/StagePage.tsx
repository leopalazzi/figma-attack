/** @format */

import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../components/Molecules/Breadcrumb/Breadcrumb";
import NextStage from "../../components/Molecules/NextStage/NextStage";
import { useEffect } from "react";
import TwoColumnsGrid from "../../components/Template/TwoColumnsGrid/TwoColumnsGrid";
import StageDescriptionCard from "../../components/Organisms/StageDescriptionCard/StageDescriptionCard";
import StepCards from "../../components/Organisms/StepCards/StepCards";
import TipsCard from "../../components/Molecules/TipsCard/TpsCard";
import "./StagePage.style.scss";

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
        switch(currentStage.type){
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
    }

    return (
        <div className="stage-page-container">
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
                {
                  getCurrentStage()
                }
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
        </div>
    );
};

export default StagePage;
