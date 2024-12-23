/** @format */

import { useNavigate } from "react-router-dom";
import UniversButton from "../../Atoms/UniversButton/UniversButton";
import { useTranslation } from "react-i18next";
import Bem from "../../../helpers/Bem";
import "./UniverseCard.style.scss";
import Badge from "../../Atoms/Badge/Badge";
// @ts-ignore
import neophyteNexusLogo from "../../../assets/universes/logo_neophyte_nexus.svg";
// @ts-ignore
import craftmenCrossingLogo from "../../../assets/universes/logo_craftmen_crossing.svg";
// @ts-ignore
import masterMetropolisLogo from "../../../assets/universes/logo_master_metropolis.svg";

const UniverseCard = ({ title, description, badges, universCode }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const b = Bem("universe-card");

    const onClick = () => {
        navigate(`/universe/${universCode}`);
    };

    const getUniverseLogo = () => {
        let universeLogo;
        switch (universCode) {
            case "neophyte_nexus":
                universeLogo = neophyteNexusLogo;
                break;
            case "craftmen_crossing":
                universeLogo = craftmenCrossingLogo;
                break;
            case "master_metropolis":
                universeLogo = masterMetropolisLogo;
                break;
        }
        return universeLogo;
    };

    return (
        <div
            className={b("container")}
            style={{ backgroundImage: "" }}
        >
            <img src={getUniverseLogo()} alt=""/>
            <div className={b("header")}>
                <h3 className={b("title")}>{title}</h3>
                <div className={b("badges-container")}>
                    {badges?.map((badge, index) => {
                        return (
                            <Badge
                                key={`badge-${index}`}
                                universe={badge.universe}
                            >
                                {badge.label}
                            </Badge>
                        );
                    })}
                </div>
            </div>
            <span className={b("description")}>{description}</span>
            <UniversButton
                univers={universCode}
                label={t("universeButtonLabel")}
                onClick={onClick}
                customClassName={b("button")}
            />
        </div>
    );
};

export default UniverseCard;
