/** @format */

import { useTranslation } from "react-i18next";
import DungeonCard from "../DungeonCard/DungeonCard";
import Bem from "../../../helpers/Bem";
import "./DungeonCards.style.scss";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

const DungeonCards = ({ dungeons, universCode }) => {
    const { t } = useTranslation();
    const b = Bem("dungeon-cards");

    return (
        <div className={b()}>
            <h2 className={b("title")}>{t("dungeonsLabel")}</h2>

            <div className={b("container")}>
                <SimpleBar
                    style={{ overflowX: "auto" }}
                    className="scroll-container"
                    autoHide={false}
                >
                    <div style={{ display: "flex", gap: "24px"}}>
                        {dungeons.map((dungeon, index) => {
                            return (
                                <DungeonCard
                                    key={`${dungeon.code}-${index}`}
                                    {...dungeon}
                                    dungeonCode={dungeon.code}
                                    universCode={universCode}
                                />
                            );
                        })}
                    </div>
                </SimpleBar>
            </div>
        </div>
    );
};

export default DungeonCards;
