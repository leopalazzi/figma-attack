import { FunctionComponent } from 'react';
import Bem from '../../../helpers/Bem';
import './UniversButton.style.scss';

export const UniversButton: FunctionComponent<any> = ({ label, icon, outline, univers, onClick, customClassName }) => {
  const b = Bem('univers-button');

  return (
    <button
      className={b(univers, { outline: outline }).mix(
        `univers-button-global ${customClassName ? customClassName : ''}`
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default UniversButton;
