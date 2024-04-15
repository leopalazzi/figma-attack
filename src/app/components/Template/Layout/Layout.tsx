/** @format */

import NavBar from "../../Organisms/NavBar/NavBar";
import "./Layout.style.scss";
import { LayoutProps } from "./Layout.model";
import Header from "../../Molecules/Header/Header";
import Breadcrumb from "../../Molecules/Breadcrumb/Breadcrumb";

const Layout = ({ children, breadcrumbLinks, containerProps, key }: LayoutProps) => {
    return (
        <div key={key}>
            <Header />
            {breadcrumbLinks?.length > 0 && <Breadcrumb linksData={breadcrumbLinks} />}
            <div
                className="layout"
                {...containerProps}
            >
                {children}
            </div>
            <NavBar />
        </div>
    );
};

export default Layout;
