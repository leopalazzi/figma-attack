import { useTranslation } from 'react-i18next';
import Layout from '../../components/Template/Layout/Layout';
import UniversesDescription from '../../components/Molecules/UniversesDescription/UniversesDescription';
import UniverseCards from '../../components/Organisms/UniverseCards/UniverseCards';

const Home = () => {
  const { t } = useTranslation();
  const universes: Array<any> = t('universes', { returnObjects: true });
  return (
    <Layout disableNavBar={true}>
      <UniversesDescription />
      <UniverseCards universes={universes} />
    </Layout>
  );
};

export default Home;
