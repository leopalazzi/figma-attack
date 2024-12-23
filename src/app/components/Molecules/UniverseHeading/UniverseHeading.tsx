/** @format */

import { FunctionComponent } from "react";
import Bem from "../../../helpers/Bem";
import "./UniverseHeading.style.scss";
import { getUniverseIcon } from "../../../helpers/UniverseHelper";
import TitleWithDescription from "../TitleWithDescription/TitleWithDescription";
import Badges from "../Badges/Badges";

export const UniverseHeading: FunctionComponent<any> = ({ currentUniverse, badgesData, customProps }) => {
    const b = Bem("universe-heading");
    return (
        <div
            className={b("container")}
            {...customProps}
        >
            <img src={getUniverseIcon(currentUniverse.code)} alt="" width={"40px"} height={"40px"}/>
            <TitleWithDescription
                title={currentUniverse.title}
                description={currentUniverse.description}
            />
            <Badges badgesData={badgesData} />
        </div>
    );
};

export default UniverseHeading;
