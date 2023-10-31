import NavBar from '../../Organisms/NavBar/NavBar';
import './Layout.style.scss';
import { LayoutProps } from './Layout.model';

const Layout = ({ children, disableNavBar } : LayoutProps) => {

  return (
    <div>
      <div className="layout">{children}</div>
      <NavBar/>
       {/* {!disableNavBar && <NavBar/>} */}
    </div>
  );
};

export default Layout;
