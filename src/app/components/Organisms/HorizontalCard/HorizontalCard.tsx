/** @format */

import Bem from "../../../helpers/Bem";
import Badge from "../../Atoms/Badge/Badge";
import { useNavigate } from "react-router-dom";
import "./HorizontalCard.style.scss";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "react";
import { HorizontalCardProps } from "./HorizontalCard.model";

const HorizontalCard: FunctionComponent<HorizontalCardProps> = ({
    title,
    badgesData,
    universCode,
    activateClick,
    hideDiscoverLabel,
    customClassName,
}) => {
    const navigate = useNavigate();
    const b = Bem("horizontal-card");
    const { t } = useTranslation();

    return (
        <div
            {...(activateClick && {
                onClick: () => {
                    navigate(`/universe/${universCode}`);
                },
                tabIndex: 0,
            })}
            className={b("container", { clickable: activateClick }).mix(customClassName)}
        >
            <div className={b("left-side")}>
                <div className={b("text-container")}>
                    {!hideDiscoverLabel && <span className={b("discover-text")}>{t("discoberLabel")}</span>}
                    <h2 className={b("title")}>{title}</h2>
                </div>
                <div className={b("badges")}>
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
            </div>
        </div>
    );
};

export default HorizontalCard;
