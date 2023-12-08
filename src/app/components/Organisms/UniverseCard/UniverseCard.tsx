import { useNavigate } from 'react-router-dom';
import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './UniverseCard.style.scss';
import Badge from '../../Atoms/Badge/Badge';
// @ts-ignore
import neophyteNexusLogo  from "../../../assets/universes/logo_neophyte_nexus.png";

const UniverseCard = ({ title, description, badges, universCode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const b = Bem('universe-card');

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
      <img src={getUniverseLogo()} />
      <div className={b("header")}>
      <h3 className={b('title')}>{title}</h3>
      <div className={b('badges-container')}>
        {badges?.map((badge, index) => {
          return <Badge key={`badge-${index}`} universe={badge.universe}>{badge.label}</Badge>;
        })}
      </div>
      </div>
      <span className={b('description')}>{description}</span>
      <UniversButton
        univers={universCode}
        label={t('universeButtonLabel')}
        onClick={onClick}
        customClassName={b('button')}
      />
    </div>
  );
};

export default UniverseCard;
