/** @format */

import { FunctionComponent } from "react";
import "./SimpleCard.style.scss";
import { SimpleCardProps } from "./SimpleCard.model";

const SimpleCard : FunctionComponent<SimpleCardProps> = ({children, gap}) => {
    return (
        <div className={"simple-card"} style={{...gap && {gap: gap}}}>
            {children}
        </div>
    );
};

export default SimpleCard;
