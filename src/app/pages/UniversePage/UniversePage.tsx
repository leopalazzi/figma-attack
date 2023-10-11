import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Molecules/Breadcrumb/Breadcrumb';
import Layout from '../../components/Template/Layout/Layout';
import HorizontalCard from '../../components/Organisms/HorizontalCard/HorizontalCard';
import DungeonCards from '../../components/Organisms/DungeonCards/DungeonCards';

const UniversePage = () => {
  const { t } = useTranslation();
  const { code } = useParams();
  const universes: Array<any> = t('universes', { returnObjects: true });
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
      <Breadcrumb linksData={[{ url: '/home', label: t('universesLabel') }]} />
      <HorizontalCard
        activateClick={false}
        badgesData={badgesData}
        title={currentUniverse.title}
        universCode={currentUniverse.code}
      />
      <DungeonCards dungeons={currentDungeons} universCode={code}/>
    </Layout>
  );
};

export default UniversePage;
