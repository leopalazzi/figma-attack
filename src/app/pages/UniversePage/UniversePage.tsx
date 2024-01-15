/** @format */

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Molecules/Breadcrumb/Breadcrumb";
import Layout from "../../components/Template/Layout/Layout";
import DungeonCards from "../../components/Organisms/DungeonCards/DungeonCards";
import "./UniversePage.style.scss";
import TitleWithDescription from "../../components/Molecules/TitleWithDescription/TitleWithDescription";
import Badges from "../../components/Molecules/Badges/Badges";

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
        {
            universe: currentUniverse.code,
            label: currentUniverse.numberSideQuests,
        },
    ];

    return (
        <Layout>
            <Breadcrumb linksData={[{ url: "/home", label: t("universesLabel") }]} />
            <div>
                <TitleWithDescription
                    title={currentUniverse.title}
                    description={currentUniverse.description}
                />
                <Badges badgesData={badgesData} />
            </div>
            <DungeonCards
                dungeons={currentDungeons}
                universCode={code}
            />
        </Layout>
    );
};

export default UniversePage;
