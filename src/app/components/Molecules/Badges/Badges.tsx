/** @format */

import { FunctionComponent } from "react";
import Bem from "../../../helpers/Bem";
import "./Badges.style.scss";
import Badge from "../../Atoms/Badge/Badge";

export const Badges: FunctionComponent<any> = ({ badgesData }) => {
    const b = Bem("badges");

    return (
        <div className={b("container")}>
            {badgesData.map((badgeData, index) => {
                return (
                    <Badge
                        key={`${badgeData.label}-${index}`}
                        universe={badgeData.universe}
                    >
                        {badgeData.label}
                    </Badge>
                );
            })}
        </div>
    );
};

export default Badges;
