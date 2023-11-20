import { useTranslation } from 'react-i18next';
import Layout from '../../components/Template/Layout/Layout';
import UniverseCards from '../../components/Organisms/UniverseCards/UniverseCards';
import './Basement.style.scss';
import TitleWithDescription from '../../components/Molecules/TitleWithDescription/TitleWithDescription';

const Basement = () => {
  const { t } = useTranslation();
  const universes: Array<any> = t('universes', { returnObjects: true });
  return (
    <Layout>
      <TitleWithDescription title={t('basement.universes.title')} description={t('basement.universes.description')} />
      <UniverseCards universes={universes} type="horizontal" cardCustomClassName="basement-universe-card" />
    </Layout>
  );
};

export default Basement;
