import { useTranslation } from 'react-i18next';
import UniverseCards from '../../components/Organisms/UniverseCards/UniverseCards';
import Header from '../../components/Molecules/Header/Header';


const Home = () => {
  const { t } = useTranslation();
  const universes: Array<any> = t('universes', { returnObjects: true });

  return (
    <div>
      <Header/>
      <UniverseCards universes={universes} type="vertical" />
    </div>
  );
};

export default Home;
