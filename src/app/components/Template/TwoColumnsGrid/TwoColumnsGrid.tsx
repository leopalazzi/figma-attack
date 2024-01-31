import './TwoColumnsGrid.style.scss';
import { TwoColumnsGridProps } from './TwoColumnsGrid.model';

const TwoColumnsGrid = ({ children, id, customClassName } : TwoColumnsGridProps) => {

  return (
    <div className={`twoColumns ${customClassName ? customClassName : ""}`} id={id}>
      {children}
    </div>
  );
};

export default TwoColumnsGrid;
