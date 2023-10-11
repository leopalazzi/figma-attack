// import { useNavigate } from 'react-router-dom';
// import UniversButton from '../../Atoms/UniversButton/UniversButton';
import { useTranslation } from 'react-i18next';
import Bem from '../../../helpers/Bem';
import StageText from '../../Molecules/StageText/StageText';
import './DescriptionStageCard.style.scss';
import StageStoryHelps from '../../Molecules/StageStoryHelps/StageStoryHelps';

const DescriptionStageCard = ({ title, description, steps }) => {
  const { t } = useTranslation();
  const b = Bem('description-stage');

  return (
    <div className={b('card')} id="stage-card">
      <div className={b('text-head')}>
        <h4 className={b('title')}>{title}</h4>
        <p className={b('description')}>{description}</p>
      </div>
      <div className={b('steps-container')}>
        {steps?.map((step, index) => {
          return (
            <>
              <div className={b('step-container')}>
                <StageText title={`${t('stepLabel')} ${index + 1}`} description={step.title} />
              </div>
              <div>
                <StageText title={t('storyLabel')} description={step.description} />
                {step.helps?.length > 0 && <StageStoryHelps helps={step.helps} />}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DescriptionStageCard;
