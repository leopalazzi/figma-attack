// import { useNavigate } from 'react-router-dom';
// import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import StageText from '../../Molecules/StageText/StageText';
import './DescriptionStageCard.style.scss';

const DescriptionStageCard = ({ title, description, steps }) => {
  const { t } = useTranslation();
  const b = Bem('description-stage');
  // const navigate = useNavigate();

  // const onClick = () => {
  //   navigate(`/universe/${universCode}/dungeon/${dungeonCode}`);
  // };

  return (
    <div className={b('card')}>
      <div className={b('text-head')}>
        <h4 className={b('title')}>{title}</h4>
        <p className={b('description')}>{description}</p>
      </div>
      <div className={b('steps-container')}>
        {steps.map((step, index) => {
          return (
            <div className={b('step-container')}>
              <div className={b('step-text-container')}>
              <StageText title={`${t('stepLabel')} ${index + 1}`} description={step.title} />
              <StageText title={t('storyLabel')} description={step.description} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DescriptionStageCard;
