/** @format */

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Bem from "../../../helpers/Bem";
import "./StageCard.style.scss";
import NextArrowIcon from "../../../icons/NextArrowIcon/NextArrowIcon";

const StageCard = ({ stageNumberTitle, title, universeCode, dungeonCode, stageNumber }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const b = Bem("stage-card");

    const onClickNextStage = (e: any) => {
        e.preventDefault();
        navigate(`/universe/${universeCode}/dungeon/${dungeonCode}/stage/${stageNumber}`);
    };

    return (
        <div className={b("container")}>
            <div className={b("text-container")}>
                <span>{stageNumberTitle}</span>
                <h4 className={b("title")}>{title}</h4>
            </div>
            <div
                aria-label={`Go to stage ` + stageNumber}
                className={b("next-container")}
                tabIndex={0}
                onClick={onClickNextStage}
            >
                <span className={b(`start-label`).mix(universeCode)}>{t("startStageLabel")}</span>
                <NextArrowIcon universeCode={universeCode} />
            </div>
        </div>
    );
};

export default StageCard;
