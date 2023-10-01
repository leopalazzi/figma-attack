import { FunctionComponent } from 'react';
import './ActionButton.style.scss';

export const ActionButton: FunctionComponent<any> = ({ label, icon, outline, onClick }) => {

  return (
    <button className={outline ? 'action-button action-button-outline' : 'action-button'} onClick={onClick} aria-label={label}>
      {icon}
      {label}
    </button>
  );
};

export default ActionButton;
