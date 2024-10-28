/** @format */
import "./StagesCard.style.scss";
import StageCard from "../StageCard/StageCard";
import { useTranslation } from "react-i18next";

const StagesCard = ({ universeCode, dungeonCode, stages }) => {
    const { t } = useTranslation();

    return (
        <div className="stages-card-container">
            {stages.map((stage, index) => {
                return (
                    <StageCard
                        stageNumberTitle={`${t("stageLabel")} ${index + 1}`}
                        title={stage.title}
                        type={stage.type}
                        universeCode={universeCode}
                        dungeonCode={dungeonCode}
                        stageNumber={index + 1}
                        key={`stage-${index + 1}`}
                    />
                );
            })}
        </div>
    );
};

export default StagesCard;
