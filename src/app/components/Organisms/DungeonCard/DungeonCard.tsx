import { useNavigate } from 'react-router-dom';
import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';

const DungeonCard = ({ title, imageUrl, description, universCode, dungeonCode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClick= () =>{
    navigate(`/universe/${universCode}/dungeon/${dungeonCode}`)
  }

  return (
    <div>
      <img src={imageUrl} />
      <h3>{title}</h3>
      <span>{description}</span>
      <UniversButton univers={universCode} label={t("dungeonButtonLabel")} onClick={onClick}/>
    </div>
  );
};

export default DungeonCard;
