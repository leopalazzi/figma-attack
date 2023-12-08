import { useNavigate } from 'react-router-dom';
import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './DungeonCard.style.scss';
import Badge from '../../Atoms/Badge/Badge';
// @ts-ignore
import neophyteNexusLogo  from "../../../assets/universes/logo_neophyte_nexus.png";

const DungeonCard = ({ title, description, universCode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const b = Bem('dungeon-card');

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

  return (
    <div className={b('container')}>
      <div className={b("header")}>
      </div>
      <div className={b("title-container")}>
        <h3 className={b('title')}>{title}</h3>
        <span className={b('description')}>{description}</span>
      </div>
      <div className={b("buttons-container")}>
        <UniversButton
            univers={universCode}
            label={t('dungeon.visit')}
            onClick={onClick}
            customClassName={b('button')}
        />
        <UniversButton
            univers={universCode}
            label={t('dungeon.start')}
            onClick={onClick}
            customClassName={b('button')}
            outline={true}
        />
      </div>
    </div>
  );
};

export default DungeonCard;
