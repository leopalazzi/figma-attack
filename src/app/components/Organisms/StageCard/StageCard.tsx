/** @format */

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Bem from "../../../helpers/Bem";
import "./StageCard.style.scss";
import NextArrowIcon from "../../../icons/NextArrowIcon/NextArrowIcon";
import Badge from "../../Atoms/Badge/Badge";

const StageCard = ({ stageNumberTitle, type, title, universeCode, dungeonCode, stageNumber }) => {
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
                <div className={b("exercice")}>
                    <span>{stageNumberTitle}</span>
                    <Badge>{t(`exercicesLabel.${type}`)}</Badge>
                </div>
                <h4 className={b("title")}>{title}</h4>
            </div>
            <button
                aria-label={`Go to stage ` + stageNumber}
                className={b("next-container")}
                onClick={onClickNextStage}
            >
                <span className={b(`start-label`).mix(universeCode)}>{t("startStageLabel")}</span>
                <NextArrowIcon universeCode={universeCode} />
            </button>
        </div>
    );
};

export default StageCard;
