/** @format */

import { useTranslation } from "react-i18next";
import "./UniverseCards.style.scss";
import { FunctionComponent } from "react";
import { UniverseCardsProps } from "./UniverseCards.model";
import UniverseCard from "../UniverseCard/UniverseCard";

const UniverseCards: FunctionComponent<UniverseCardsProps> = ({ universes, type }) => {
    const { t } = useTranslation();

    return (
        <div className={`universe-cards-${type}`}>
            {universes.map((universe, index) => {
                const numberDungeons = universe.dungeons.length;
                const badgesData = [
                    { label: universe.level },
                    {
                        universe: universe.code,
                        label: `${numberDungeons} ${t("dungeonsLabel")}`,
                    }
                ];
                const universeImg = require(`../../../assets/home/universe-${(index + 1).toString()}.png`).default;
                return (
                    <div
                        style={{
                            backgroundImage: `url(${universeImg})`,
                        }}
                        className="universe-container"
                        key={universe.code}
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
