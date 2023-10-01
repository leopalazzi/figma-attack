import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Molecules/Breadcrumb/Breadcrumb';
import Layout from '../../components/Template/Layout/Layout';
import StageCard from '../../components/Organisms/StageCard/StageCard';

const DungeonPage = () => {
  const { t } = useTranslation();
  const { universeCode, code } = useParams();
  const universes: Array<any> = t('universes', { returnObjects: true });
  const currentUniverse = universes.find((universe) => universe.code === universeCode);
  const currentDungeon = currentUniverse?.dungeons.find((dungeon) => {
    if (dungeon.code === code) {
      return true;
    }
  });

  return (
    <Layout>
      <h1>DUNGEON PAGE</h1>
      <Breadcrumb
        linksData={[
          { url: '/home', label: t('universesLabel') },
          { url: `/universe/${universeCode}`, label: currentUniverse.title },
        ]}
      />
      {currentDungeon.stages.map((stage, index) => {
        return (
          <StageCard
            stageNumberTitle={`${t('stageLabel')} ${index + 1}`}
            title={stage.title}
            universeCode={universeCode}
            dungeonCode={code}
            stageNumber={index + 1}
            key={`stage-${index + 1}`}
          />
        );
      })}
      <span>TEST</span>
    </Layout>
  );
};

export default DungeonPage;
