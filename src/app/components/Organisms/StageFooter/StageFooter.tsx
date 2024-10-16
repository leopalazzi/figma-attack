/** @format */

import { useTranslation } from "react-i18next";
import Bem from "../../../helpers/Bem";
import "./StageFooter.style.scss";
import SkipStageLabel from "../../Molecules/SkipStageLabel/SkipStageLabel";

const StageFooter = ({ dungeonBaseUrl, stages, currentStageNumber }) => {
    const { t } = useTranslation();
    const bem = Bem("stage-footer");
    const nextStage = stages[currentStageNumber];
    const prevStage = stages[currentStageNumber - 2];
    const nextStageUrl = nextStage ? `${dungeonBaseUrl}/stage/${(currentStageNumber + 1).toString()}` : "";
    const prevStageUrl = prevStage ? `${dungeonBaseUrl}/stage/${(currentStageNumber - 1).toString()}` : "";


    return (
        <div className={bem("container")}>
            {prevStage && (
                <SkipStageLabel
                    title={t("previousStageLabel")}
                    stageTitle={prevStage.title}
                    url={prevStageUrl}
                    identifier="previous-label"
                />
            )}
            {nextStage && (
                <SkipStageLabel
                    title={t("nextStageLabel")}
                    stageTitle={nextStage.title}
                    url={nextStageUrl}
                    identifier={"next-label"}
                />
            )}
        </div>
    );
};

export default StageFooter;
