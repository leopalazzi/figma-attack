import NavBar from '../../Organisms/NavBar/NavBar';
import './Layout.style.scss';
import { LayoutProps } from './Layout.model';
import Header from '../../Molecules/Header/Header';

const Layout = ({ children, containerProps } : LayoutProps) => {

  return (
    <div>
       <Header/>
      <div className="layout" {...containerProps}>{children}</div>
      <NavBar/>
    </div>
  );
};

export default Layout;
