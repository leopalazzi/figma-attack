import { universesCode } from "../config/config";
import Universe1 from "../icons/Universes/Universe1";

export const getUniverseIcon = (code) => {
    let icon;
    switch (code) {
        case universesCode.craftmanCrossing:
            console.log("going here")
            icon = <Universe1 />;
            break;
        default:
            icon = <></>;
            break;
    }
    return icon;
};