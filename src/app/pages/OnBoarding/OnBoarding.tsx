import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { onBoardingbuttonsConfig } from '../../config/buttonOnBoarding.config';
import ActionButton from '../../components/Atoms/ActionButton/ActionButton';
import Bem from '../../helpers/Bem';
import "./OnBoarding.style.scss";
import logo from '../../assets/logo.svg';
// @ts-ignore
import onBoarding1 from '../../assets/onboarding-1.jpg';
// @ts-ignore
import onBoarding2 from '../../assets/onboarding-2.jpg';
// @ts-ignore
import onBoarding3 from '../../assets/onboarding-3.jpg';

export const OnBoarding: FunctionComponent<any> = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const b = Bem("on-boarding");
  let onBoardingImg;
  if(id === "1"){
      onBoardingImg = onBoarding1;
  }
  else if(id==="2"){
    onBoardingImg = onBoarding2;
  }
  else if(id==="3"){
    onBoardingImg = onBoarding3;
  }

  return (
    <div className={b("container")}>
      <div className={b("left")}>
        <img className={b("logo")} src={logo} width="40px"/>
        <div className={b("text-container")}>
        <h1 className={b("title")}>{t(`onboarding.page_${id}.title`)}</h1>
        <p className={b("description")}>{t(`onboarding.page_${id}.description`)}</p>
        </div>
        <div>
          {onBoardingbuttonsConfig[`page_${id}`](t, navigate).map((buttonConfig, index) => {
            return (
              <ActionButton key={`onBoardingBtn-${index}`} {...buttonConfig} />
            );
          })}
        </div>
      </div>
      <img src={onBoardingImg}/>
    </div>
  );
};

export default OnBoarding;
