import { useTranslation } from 'react-i18next';
import Layout from '../../components/Template/Layout/Layout';
import UniverseCards from '../../components/Organisms/UniverseCards/UniverseCards';
import './Basement.style.scss';
import TitleWithDescription from '../../components/Molecules/TitleWithDescription/TitleWithDescription';
import ActionButton from '../../components/Atoms/ActionButton/ActionButton';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../store/appContext';
import Bem from '../../helpers/Bem';
import YoutubeVideos from '../../components/Organisms/YoutubeVideos/YoutubeVideos';
import { knowledgesVideo } from '../../config/knowledges.config';

const Basement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setActivePage } = useContext(AppContext);
  const b = Bem('basement');

  const universes: Array<any> = t('universes', { returnObjects: true });
  return (
    <Layout>
      <div className={b("universe-part")}>
        <TitleWithDescription title={t('basement.universes.title')} description={t('basement.universes.description')} />
        <UniverseCards universes={universes} type="horizontal" cardCustomClassName={b("universe-card")} />
      </div>
      <div>
        <div className={b("title-with-button")}>
          <TitleWithDescription
            title={t('basement.knowledgeTemple.title')}
            description={t('basement.knowledgeTemple.description')}
            marginBottom='0px'
          />
          <ActionButton label={"Access Temple"} onClick={() => {setActivePage("knowledges");navigate("/knowledges");}}/>
        </div>
        <YoutubeVideos videosData={knowledgesVideo.splice(-3)}/>
      </div>
    </Layout>
  );
};

export default Basement;
