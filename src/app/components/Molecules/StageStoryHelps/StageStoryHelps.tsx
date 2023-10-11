import { useTranslation } from 'react-i18next';
import ActionButton from '../../Atoms/ActionButton/ActionButton';
import Bem from '../../../helpers/Bem';
import { useState } from 'react';
import HelpIcon from '../../../icons/HelpIcon/HelpIcon';
import "./StageStoryHelps.style.scss";

const StageStoryHelps = ({ helps }) => {
  const { t } = useTranslation();
  const b = Bem('stage-story');
  const [isHelpDisplayed, setIsHelpDisplayed] = useState(false);

  const onClickHelp = () => {
    setIsHelpDisplayed((prev) => !prev);
  };

  return (
    <div className={b('container')}>
      <div className={b('helps-container')}>
        {isHelpDisplayed &&
          helps.map((help) => {
            return (
              <div className={b('help-container')}>
                <HelpIcon />
                <p className={b("help-text")}>{help}</p>
              </div>
            );
          })}
      </div>

      <ActionButton label={isHelpDisplayed ? t('hideHelpLabel') : t('checkHelpLabel')} onClick={onClickHelp} />
    </div>
  );
};

export default StageStoryHelps;
