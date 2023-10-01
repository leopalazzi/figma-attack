import Badge from '../../Atoms/Badge/Badge';
import { useNavigate } from 'react-router-dom';

const HorizontalCard = ({ title, badgesData, universCode, activateClick }) => {
  const navigate = useNavigate();

  return (
    <div
       {...activateClick && {onClick: () => {navigate(`/universe/${universCode}`)}, tabIndex:0}}
    >
      <h2>{title}</h2>
      {
        badgesData.map((badgeData, index)=> {
          return <Badge key={`${badgeData.label}-${index}`} universe={badgeData.universe}>{badgeData.label}</Badge>
        })
      }
    </div>
  );
};

export default HorizontalCard;
