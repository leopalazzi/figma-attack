import { useNavigate } from 'react-router-dom';
import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import "./DungeonCard.style.scss";

const DungeonCard = ({ title, imageUrl, description, universCode, dungeonCode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const b = Bem('dungeon-card');

  const onClick = () => {
    navigate(`/universe/${universCode}/dungeon/${dungeonCode}`);
  };

  return (
    <div className={b("container")}>
      <img src={imageUrl} />
      <div className={b("info-container")}>
        <h3 className={b("title")}>{title}</h3>
        <span className={b("description")}>{description}</span>
      </div>
      <UniversButton univers={universCode} label={t('dungeonButtonLabel')} onClick={onClick} style={{width: "100%"}} customClassName={b("button")}/>
    </div>
  );
};

export default DungeonCard;
