import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import './NextStage.style.scss';
import { useNavigate } from 'react-router-dom';

const NextStage = ({ title, url }) => {
  const b = Bem('next-stage');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClick = (event) => {
    event.preventDefault();
    navigate(url);
  };

  return (
    <div className={b('container')}>
      <span className={b('label')}>{t('nextStageLabel')}</span>
      <a className={b('link')} onClick={onClick} href={url} aria-label={`Link to ${title}`}>
        {title}
      </a>
    </div>
  );
};

export default NextStage;
