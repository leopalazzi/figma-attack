import { FunctionComponent } from 'react';
import Bem from '../../../helpers/Bem';
import './StageText.style.scss';

export const StageText: FunctionComponent<any> = ({ title, description }) => {
  const b = Bem('stage-text');

  return (
    <div className={b('container')}>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  );
};

export default StageText;
