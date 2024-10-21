/** @format */

import { useNavigate } from "react-router-dom";
import UniversButton from "../../Atoms/UniversButton/UniversButton";
import { useTranslation } from "react-i18next";
import Bem from "../../../helpers/Bem";
import "./DungeonCard.style.scss";

const DungeonCard = ({ title, description, stages, universCode, dungeonCode }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const b = Bem("dungeon-card");
    const dungeonImg = require(`../../../assets/dungeons/${dungeonCode}.svg`);

    const onClickVisit = () => {
        navigate(`/universe/${universCode}/dungeon/${dungeonCode}`);
    };

    const onClickStart = () => {
        navigate(`/universe/${universCode}/dungeon/${dungeonCode}/stage/1`);
    };

    return (
        <div className={b("container")}>
            <div className={b("heading")}>
                <img src={dungeonImg.default} alt=""/>
                <span className={b("stages-label")}>{`${stages.length} Stages`}</span>
            </div>
            <div className={b("title-container")}>
                <h3 className={b("title")}>{title}</h3>
                <p className={b("description")}>{description}</p>
            </div>
            <div className={b("buttons-container")}>
                <UniversButton
                    univers={universCode}
                    label={t("dungeon.visit")}
                    onClick={onClickVisit}
                    customClassName={b("button")}
                />
                <UniversButton
                    univers={universCode}
                    label={t("dungeon.start")}
                    onClick={onClickStart}
                    customClassName={b("button")}
                    outline={true}
                />
            </div>
        </div>
    );
};

export default DungeonCard;
