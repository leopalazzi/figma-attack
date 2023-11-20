import { useTranslation } from 'react-i18next';
import Layout from '../../components/Template/Layout/Layout';
import TitleWithDescription from '../../components/Molecules/TitleWithDescription/TitleWithDescription';
import UniverseCards from '../../components/Organisms/UniverseCards/UniverseCards';

const Home = () => {
  const { t } = useTranslation();
  const universes: Array<any> = t('universes', { returnObjects: true });
  return (
    <Layout disableNavBar={true}>
      <TitleWithDescription title={t("home.title")} description={t("home.description")} />
      <UniverseCards universes={universes} type="vertical" />
    </Layout>
  );
};

export default Home;
