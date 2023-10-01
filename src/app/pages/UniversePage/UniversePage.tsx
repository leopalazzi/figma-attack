import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Molecules/Breadcrumb/Breadcrumb';
import Layout from '../../components/Template/Layout/Layout';
import DungeonCard from '../../components/Organisms/DungeonCard/DungeonCard';
import HorizontalCard from '../../components/Organisms/HorizontalCard/HorizontalCard';

const UniversePage = () => {
  const { t } = useTranslation();
  const { code } = useParams();
  const universes: Array<any> = t('universes', { returnObjects: true });
  const currentUniverse = universes.find((universe) => universe.code === code);
  const currentDungeons: Array<any> = currentUniverse.dungeons;
  const badgesData = [
    { label: currentUniverse.level },
    {
      universe: currentUniverse.code,
      label: currentUniverse.numberDungeons,
    },
    {
      universe: currentUniverse.code,
      label: currentUniverse.numberSideQuests,
    },
  ];
  console.log(currentDungeons);

  return (
    <Layout>
      <Breadcrumb linksData={[{ url: '/home', label: t('universesLabel') }]} />
      <h1>UNIVERSE PAGE</h1>
      <HorizontalCard
        activateClick={false}
        badgesData={badgesData}
        title={currentUniverse.title}
        universCode={currentUniverse.code}
      />
      <div>
        {t('dungeonsLabel')}
        {currentDungeons.map((dungeon) => {
          return <DungeonCard key={dungeon.code} {...dungeon} dungeonCode={dungeon.code} universCode={code} />;
        })}
      </div>
    </Layout>
  );
};

export default UniversePage;
