import { useNavigate } from 'react-router-dom';
import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './DungeonCard.style.scss';
// @ts-ignore
import neophyteNexusLogo  from "../../../assets/universes/logo_neophyte_nexus.png";
// @ts-ignore



const DungeonCard = ({ title, description, universCode, dungeonCode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const b = Bem('dungeon-card');
  const test = require("../../../assets/dungeons/1.png")

  const onClick = () => {
    navigate(`/universe/${universCode}`);
  };

  const getUniverseLogo = () => {
    let universeLogo;
    switch(universCode){
      case 'neophyte_nexus':
        universeLogo = neophyteNexusLogo;
    }
    return universeLogo;
  }

  const onClickVisit = () => {
    navigate(`/universe/${universCode}/dungeon/${dungeonCode}`);
  }

  const onClickStart = () => {
    navigate(`/universe/${universCode}/dungeon/${dungeonCode}/stage/1`);
  }

  return (
    <div className={b('container')}>
      <div className={b("header")}>
        <img src={test.default}/>
      </div>
      <div className={b("title-container")}>
        <h3 className={b('title')}>{title}</h3>
        <span className={b('description')}>{description}</span>
      </div>
      <div className={b("buttons-container")}>
        <UniversButton
            univers={universCode}
            label={t('dungeon.visit')}
            onClick={onClickVisit}
            customClassName={b('button')}
        />
        <UniversButton
            univers={universCode}
            label={t('dungeon.start')}
            onClick={onClickStart}
            customClassName={b('button')}
            outline={true}
        />
      </div>
    </div>
  );
};

export default DungeonCard;
