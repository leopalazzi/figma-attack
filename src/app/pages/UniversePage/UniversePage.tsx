/** @format */

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import DungeonCards from "../../components/Organisms/DungeonCards/DungeonCards";
import "./UniversePage.style.scss";
import Layout from "../../components/Template/Layout/Layout";
import UniverseHeading from "../../components/Molecules/UniverseHeading/UniverseHeading";

const UniversePage = () => {
    const { t } = useTranslation();
    const { code } = useParams();
    const universes: Array<any> = t("universes", { returnObjects: true });
    const currentUniverse = universes.find((universe) => universe.code === code);
    const currentDungeons: Array<any> = currentUniverse.dungeons;
    const numberDungeons = currentDungeons.length;

    const badgesData = [
        { label: currentUniverse.level },
        {
            universe: currentUniverse.code,
            label: `${numberDungeons} ${t("dungeonsLabel")}`,
        },
        // {
        //     universe: currentUniverse.code,
        //     label: currentUniverse.numberSideQuests,
        // },
    ];

    const universeImg = require(`../../assets/universes/background_${currentUniverse.code}.png`)?.default;

    const breadcrumbLinks = [
        { url: "/home", label: t("universesLabel") },
        { url: `/universe/${currentUniverse.code}`, label: currentUniverse.title, current: true },
    ];
    return (
            <Layout
                containerProps={{
                    style: {
                        backgroundImage: `url(${universeImg})`,
                        height: `calc(100% - 208px)`,
                        padding: "40px 0 0 40px",
                    },
                }}
                breadcrumbLinks={breadcrumbLinks}
            >
                <UniverseHeading
                    currentUniverse={currentUniverse}
                    currentDungeons={currentDungeons}
                    badgesData={badgesData}
                    customProps={{ style: { marginBottom: "40px" } }}
                />
                <DungeonCards
                    dungeons={currentDungeons}
                    universCode={code}
                />
            </Layout>
    );
};

export default UniversePage;
