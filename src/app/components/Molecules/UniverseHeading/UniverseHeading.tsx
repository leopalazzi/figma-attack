/** @format */

import { FunctionComponent } from "react";
import Bem from "../../../helpers/Bem";
import "./UniverseHeading.style.scss";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { getUniverseIcon } from "../../../helpers/UniverseHelper";
import TitleWithDescription from "../TitleWithDescription/TitleWithDescription";
import Badges from "../Badges/Badges";
import { t } from "i18next";

export const UniverseHeading: FunctionComponent<any> = ({ currentUniverse, badgesData, customProps }) => {
    const b = Bem("universe-heading");

    return (
        <div className={b("container")} {...customProps}>
            <Breadcrumb linksData={[{ url: "/home", label: t("universesLabel") }]} />
            <div>
                {getUniverseIcon(currentUniverse.code)}
                <TitleWithDescription
                    title={currentUniverse.title}
                    description={currentUniverse.description}
                />
            </div>
            <Badges badgesData={badgesData} />
        </div>
    );
};

export default UniverseHeading;
