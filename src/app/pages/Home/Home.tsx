import { useTranslation } from 'react-i18next';
import Layout from '../../components/Template/Layout/Layout';
import HorizontalCard from '../../components/Organisms/HorizontalCard/HorizontalCard';

const Home = () => {
  const { t } = useTranslation();
  const universes: Array<any> = t('universes', { returnObjects: true });

  return (
    <Layout>
      {universes.map((universe) => {
        const badgesData = [
          { label: universe.level },
          {
            universe: universe.code,
            label: universe.numberDungeons,
          },
          {
            universe: universe.code,
            label: universe.numberSideQuests,
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
