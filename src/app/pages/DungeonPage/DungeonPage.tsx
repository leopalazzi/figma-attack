import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Molecules/Breadcrumb/Breadcrumb';
import Layout from '../../components/Template/Layout/Layout';
import StageCard from '../../components/Organisms/StageCard/StageCard';
import TitleWithDescription from '../../components/Molecules/TitleWithDescription/TitleWithDescription';
import TwoColumnsGrid from '../../components/Template/TwoColumnsGrid/TwoColumnsGrid';

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

  const badgesData = [
    {
      universe: currentUniverse.code,
      label: `${currentDungeon.stages.length} ${t('stageLabel')}s`,
    },
  ];

  return (
    <Layout>
      <Breadcrumb
        linksData={[
          { url: '/home', label: t('universesLabel') },
          { url: `/universe/${universeCode}`, label: currentUniverse.title },
        ]}
      />
      <TwoColumnsGrid>
        <div>
          <TitleWithDescription title={currentDungeon.title} description={currentDungeon.description}/>
        </div>
        {
        /* <HorizontalCard
          title={currentDungeon.title}
          badgesData={badgesData}
          universCode={currentUniverse.code}
          activateClick={false}
          hideDiscoverLabel={true}
          customClassName='dungeon-page-margin-bottom'

        /> */
        }
        <div>
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
        </div>
      </TwoColumnsGrid>
    </Layout>
  );
};

export default DungeonPage;
