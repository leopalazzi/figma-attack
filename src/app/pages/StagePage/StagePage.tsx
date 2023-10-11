import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Molecules/Breadcrumb/Breadcrumb';
import Layout from '../../components/Template/Layout/Layout';
import DescriptionStageCard from '../../components/Organisms/DescriptionStageCard/DescriptionStageCard';
import domtoimage from 'dom-to-image';
import StageButtons from '../../components/Molecules/StageButtons/StageButtons';

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

  const currentStage = currentDungeon?.stages[Number(stageNumber) - 1];

  const exportToPng = () => {
    const currentStage = document.getElementById('stage-card');
    domtoimage
      .toPng(currentStage, { quality: 0.99 })
      .then((dataUrl) => {
        const binary_string = window.atob(dataUrl.replace('data:image/png;base64,', ''));
        const len = binary_string.length;
        const bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i);
        }
        const t = new Uint8Array(bytes.buffer);
        parent.postMessage({ pluginMessage: { type: 'paste-stage', imageData: t } }, '*');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <Layout>
      <Breadcrumb
        linksData={[
          { url: '/home', label: t('universesLabel') },
          { url: `/universe/${universeCode}`, label: currentUniverse.title },
          { url: `/universe/${universeCode}/dungeon/${dungeonCode}`, label: currentDungeon.title },
        ]}
      />
      <StageButtons stageNumber={stageNumber} exportToPng={exportToPng}/>
      <DescriptionStageCard
        title={currentStage.title}
        description={currentStage.description}
        steps={currentStage.steps}
      />
    </Layout>
  );
};

export default StagePage;
