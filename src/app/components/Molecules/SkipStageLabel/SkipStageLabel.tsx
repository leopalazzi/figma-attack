import Bem from '../../../helpers/Bem';
import './SkipStageLabel.style.scss';
import { useNavigate } from 'react-router-dom';

const SkipStageLabel = ({ title, stageTitle, url, identifier }) => {
  if(!url)
  {
    return null;
  }
  const b = Bem('skip-stage');
  const navigate = useNavigate();

  const onClick = (event) => {
    event.preventDefault();
    navigate(url);
  };

  return (
    <div className={b('container').mix(identifier)}>
      <span className={b('label')}>{title}</span>
      <a className={b('link')} onClick={onClick} href={url} aria-label={`Link to ${stageTitle}`}>
        {stageTitle}
      </a>
    </div>
  );
};

export default SkipStageLabel;
