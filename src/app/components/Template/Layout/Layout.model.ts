import { ReactNode } from "react";

export type LayoutProps = {
    disableNavBar?: Boolean;
    children: ReactNode;
    containerProps?: any;
    breadcrumbLinks?: any;
};
