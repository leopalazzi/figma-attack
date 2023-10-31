import { FunctionComponent } from 'react';
import './FilterButton.style.scss';

export const FilterButton: FunctionComponent<any> = ({ children, onClick, isActive }) => {
  return (
    <button className={`filter-button ${isActive ? 'filter-button-active' : ''}`} onClick={onClick} aria-label={children}>
      {children}
    </button>
  );
};

export default FilterButton;
