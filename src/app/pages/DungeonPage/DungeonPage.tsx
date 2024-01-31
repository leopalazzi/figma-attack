/** @format */

import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Layout from "../../components/Template/Layout/Layout";
import TwoColumnsGrid from "../../components/Template/TwoColumnsGrid/TwoColumnsGrid";
import StagesCard from "../../components/Organisms/StagesCard/StagesCard";
import VerticalDungeonInfos from "../../components/Organisms/VerticalDungeonInfos/VerticalDungeonInfos";

const DungeonPage = () => {
    const { t } = useTranslation();
    const { universeCode, code } = useParams();
    const universes: Array<any> = t("universes", { returnObjects: true });
    const currentUniverse = universes.find((universe) => universe.code === universeCode);
    const currentDungeon = currentUniverse?.dungeons.find((dungeon) => {
        if (dungeon.code === code) {
            return true;
        }
    });

    const breadcrumbLinks = [
        { url: "/home", label: t("universesLabel") },
        { url: `/universe/${universeCode}`, label: currentUniverse.title },
        { url: `/universe/${universeCode}/dungeon/${code}`, label: currentDungeon.title, current: true },
    ];
    
    return (
        <Layout breadcrumbLinks={breadcrumbLinks}>
            <TwoColumnsGrid>
                <VerticalDungeonInfos currentDungeon={currentDungeon} universeCode={universeCode}/>
                <StagesCard
                    stages={currentDungeon.stages}
                    universeCode={currentUniverse.code}
                    dungeonCode={currentDungeon.code}
                />
            </TwoColumnsGrid>
        </Layout>
    );
};

export default DungeonPage;
