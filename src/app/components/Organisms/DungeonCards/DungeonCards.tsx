/** @format */

import { useTranslation } from "react-i18next";
import DungeonCard from "../DungeonCard/DungeonCard";
import Bem from "../../../helpers/Bem";
import "./DungeonCards.style.scss";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { useRef } from "react";

const DungeonCards = ({ dungeons, universCode }) => {
    const { t } = useTranslation();
    const b = Bem("dungeon-cards");
    const scrollRef = useRef(null);

    const handleWheel = (e) => {
        if (scrollRef.current) {
            e.preventDefault(); // Prevent default vertical scrolling
            scrollRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div className={b()}>
            <h2 className={b("title")}>{t("dungeonsLabel")}</h2>

            <div className={b("container")}>
                <SimpleBar
                    style={{ overflowX: "auto" }}
                    className="scroll-container"
                    autoHide={false}
                    scrollableNodeProps={{ ref: scrollRef }}
                >
                    <div className={b("horizontal-container")} onWheel={handleWheel}>
                        {dungeons.map((dungeon, index) => {
                            return (
                                <DungeonCard
                                    key={`${dungeon.code}-${index}`}
                                    dungeonCode={dungeon.code}
                                    universCode={universCode}
                                    {...dungeon}
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
