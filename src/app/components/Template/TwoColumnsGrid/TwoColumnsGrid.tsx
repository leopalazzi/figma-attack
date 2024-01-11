import './TwoColumnsGrid.style.scss';
import { TwoColumnsGridProps } from './TwoColumnsGrid.model';

const TwoColumnsGrid = ({ children, id } : TwoColumnsGridProps) => {

  return (
    <div className="twoColumns" id={id}>
      {children}
    </div>
  );
};

export default TwoColumnsGrid;
