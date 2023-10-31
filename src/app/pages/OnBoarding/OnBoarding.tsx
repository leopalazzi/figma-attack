import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { onBoardingbuttonsConfig } from '../../config/buttonOnBoarding.config';
import ActionButton from '../../components/Atoms/ActionButton/ActionButton';

export const OnBoarding: FunctionComponent<any> = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>{t(`onboarding.page_${id}.title`)}</h1>
      <p>{t(`onboarding.page_${id}.description`)}</p>
      <div>
        {onBoardingbuttonsConfig[`page_${id}`](t, navigate).map((buttonConfig, index) => {
          return (
            <ActionButton key={`onBoardingBtn-${index}`} {...buttonConfig} />
          );
        })}
      </div>
    </div>
  );
};

export default OnBoarding;
