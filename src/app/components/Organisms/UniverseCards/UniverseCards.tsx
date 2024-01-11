/** @format */

import { useTranslation } from "react-i18next";
import "./UniverseCards.style.scss";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import { FunctionComponent } from "react";
import { UniverseCardsProps } from "./UniverseCards.model";
import UniverseCard from "../UniverseCard/UniverseCard";

const UniverseCards: FunctionComponent<UniverseCardsProps> = ({ universes, type }) => {
    const { t } = useTranslation();

    return (
        <div className={`universe-cards-${type}`}>
            {universes.map((universe, index) => {
                const numberDungeons = universe.dungeons.length;
                const numberSideQuests = universe.side_quests.length;
                const badgesData = [
                    { label: universe.level },
                    {
                        universe: universe.code,
                        label: `${numberDungeons} ${t("dungeonsLabel")}`,
                    },
                    {
                        universe: universe.code,
                        label: `${numberSideQuests} ${t("sideQuestsLabel")}`,
                    },
                ];
                const universeImg = require(`../../../assets/home/universe-${(index + 1).toString()}.png`).default;
                return (
                    <div
                        style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            minHeight: "620px", // Set the minimum height to 100% of the parent
                            backgroundImage: `url(${universeImg})`,
                        }}
                        className="universe-container"
                    >
                        <UniverseCard
                            key={universe.code}
                            title={universe.title}
                            universCode={universe.code}
                            badges={badgesData}
                            description={universe.description}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default UniverseCards;
