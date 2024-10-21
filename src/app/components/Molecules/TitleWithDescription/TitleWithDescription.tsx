/** @format */

import { FunctionComponent } from "react";
import Bem from "../../../helpers/Bem";
import "./TitleWithDescription.style.scss";
import { TitleWithDescriptionProps } from "./TItleWithDescription.model";

export const TitleWithDescription: FunctionComponent<TitleWithDescriptionProps> = ({ title, description }) => {
    const b = Bem("title-with-description");

    return (
        <div className={b("container")}>
            <h2 className={b("title")}>{title}</h2>
            <span className={b("description")}>{description}</span>
        </div>
    );
};

export default TitleWithDescription;
