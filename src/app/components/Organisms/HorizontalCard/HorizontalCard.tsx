import Bem from '../../../helpers/Bem';
import Badge from '../../Atoms/Badge/Badge';
import { useNavigate } from 'react-router-dom';
import './HorizontalCard.style.scss';
import { useTranslation } from 'react-i18next';

const HorizontalCard = ({ title, badgesData, universCode, activateClick }) => {
  const navigate = useNavigate();
  const b = Bem('horizontal-card');
  const { t } = useTranslation();

  return (
    <div
      {...(activateClick && {
        onClick: () => {
          navigate(`/universe/${universCode}`);
        },
        tabIndex: 0,
      })}
      className={b('container')}
    >
      <div>
        <div className={b("text-container")}>
          <span className={b('discover-text')}>{t('discoberLabel')}</span>
          <h2 className={b('title')}>{title}</h2>
        </div>
        {badgesData.map((badgeData, index) => {
          return (
            <Badge key={`${badgeData.label}-${index}`} universe={badgeData.universe}>
              {badgeData.label}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCard;
