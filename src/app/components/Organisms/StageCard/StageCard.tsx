import { useNavigate } from 'react-router-dom';
import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './StageCard.style.scss';

const StageCard = ({ stageNumberTitle, title, universeCode, dungeonCode, stageNumber }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const b = Bem('stage-card');

  return (
    <div className={b('container')}>
      <div className={b('text-container')}>
        <span>{stageNumberTitle}</span>
        <h4 className={b("title")}>{title}</h4>
      </div>
      <UniversButton
        onClick={() => {
          navigate(`/universe/${universeCode}/dungeon/${dungeonCode}/stage/${stageNumber}`);
        }}
        univers={universeCode}
        label={t('stageButtonLabel')}
        outline={true}
      />
    </div>
  );
};

export default StageCard;
