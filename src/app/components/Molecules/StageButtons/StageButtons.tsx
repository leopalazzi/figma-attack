import { useTranslation } from 'react-i18next';
import ActionButton from '../../Atoms/ActionButton/ActionButton';
import Bem from '../../../helpers/Bem';
import "./StageButtons.style.scss";

const StageButtons = ({ stageNumber, exportToPng }) => {
  const { t } = useTranslation();
  const b = Bem("stage-buttons")

  return (
    <div className={b("container")}>
      <span className={b("title")}>{`${t('stageLabel')} ${stageNumber}`}</span>
      <ActionButton label={t("pasteStageLabel")} onClick={exportToPng} />
    </div>
  );
};

export default StageButtons;
