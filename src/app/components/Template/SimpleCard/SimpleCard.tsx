/** @format */

import { FunctionComponent } from "react";
import "./SimpleCard.style.scss";
import { SimpleCardProps } from "./SimpleCard.model";

const SimpleCard: FunctionComponent<SimpleCardProps> = ({ children, gap, customClassName, id }) => {
    return (
        <div
            id={id}
            className={`simple-card ${customClassName ?? ""}`}
            style={{ ...(gap && { gap: gap }) }}
        >
            {children}
        </div>
    );
};

export default SimpleCard;
