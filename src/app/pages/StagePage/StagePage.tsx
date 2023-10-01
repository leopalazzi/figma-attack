import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Molecules/Breadcrumb/Breadcrumb';
import Layout from '../../components/Template/Layout/Layout';
import DescriptionStageCard from '../../components/Organisms/DescriptionStageCard/DescriptionStageCard';

const StagePage = () => {
  const { t } = useTranslation();
  const { dungeonCode, stageNumber, universeCode } = useParams();
  const universes: Array<any> = t('universes', { returnObjects: true });
  const currentUniverse = universes.find((universe) => universe.code === universeCode);
  const currentDungeon = currentUniverse?.dungeons.find((dungeon) => {
    if (dungeon.code === dungeonCode) {
      return true;
    }
  });
  const currentStage = currentDungeon?.stages[Number(stageNumber) - 1]
  console.log(currentStage)

  return (
    <Layout>
      <Breadcrumb linksData={[
          { url: '/home', label: t('universesLabel') },
          { url: `/universe/${universeCode}`, label: currentUniverse.title },
          { url: `/universe/${universeCode}/dungeon/${dungeonCode}`, label: currentDungeon.title },

        ]} />
      <h1>STAGE PAGE</h1>
      <div>{`${t("stageLabel")} ${stageNumber}`}</div>
      <DescriptionStageCard title={currentStage.title} description={currentStage.description} steps={currentStage.steps} />
    </Layout>
  );
};

export default StagePage;
