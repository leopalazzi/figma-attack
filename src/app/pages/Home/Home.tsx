import { useTranslation } from 'react-i18next';
import Layout from '../../components/Template/Layout/Layout';
import HorizontalCard from '../../components/Organisms/HorizontalCard/HorizontalCard';

const Home = () => {
  const { t } = useTranslation();
  const universes: Array<any> = t('universes', { returnObjects: true });
  return (
    <Layout disableNavBar={true}>
      {universes.map((universe) => {
        const numberDungeons = universe.dungeons.length;
        const numberSideQuests = universe.side_quests.length;
        const badgesData = [
          { label: universe.level },
          {
            universe: universe.code,
            label: `${numberDungeons} ${t("dungeonsLabel")}`,
          },
          {
            universe: universe.code,
            label:  `${numberSideQuests} ${t("sideQuestsLabel")}`,
          },
        ];
        return (
          <HorizontalCard
            key={universe.code}
            title={universe.title}
            universCode={universe.code}
            badgesData={badgesData}
            activateClick={true}
          />
        );
      })}
    </Layout>
  );
};

export default Home;
