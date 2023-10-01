import "./Layout.style.scss";

const Layout = ({children}) => {

  return (
    <div className="layout">
        {children}
    </div>
  );
};

export default Layout;
