/** @format */

import neophyteNexusLogo from "../assets/universes/logo_neophyte_nexus.svg";
import craftmenCrossingLogo from "../assets/universes/logo_craftmen_crossing.svg";
import masterMetropolisLogo from "../assets/universes/logo_master_metropolis.svg";

export const getUniverseIcon = (code) => {
    let icon;
    switch (code) {
        case "neophyte_nexus":
            icon = neophyteNexusLogo;
            break;
        case "craftmen_crossing":
            icon = craftmenCrossingLogo;
            break;
        case "master_metropolis":
            icon = masterMetropolisLogo;
            break;
        default:
            icon = <></>;
            break;
    }
    return icon;
};
