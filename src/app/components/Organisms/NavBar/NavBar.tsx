/** @format */

import { useTranslation } from "react-i18next";
import Bem from "../../../helpers/Bem";
import "./NavBar.style.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../store/appContext";
import BasementIcon from "../../../icons/BasementIcon/BasementIcon";
import UniversesIcon from "../../../icons/UniversesIcon/UniversesIcon";
import KnowledgeIcon from "../../../icons/KnowledgeIcon/KnowledgeIcon";
import { pagesCode } from "../../../config/config";

const NavBar = () => {
    const { setActivePage, activePage } = useContext(AppContext);
    const b = Bem("navbar");
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { basement, universes, knowledges } = pagesCode;

    return (
        <div className={b("container")}>
            <button
                className={b("button", { active: activePage === basement })}
                onClick={() => {
                    setActivePage(basement);
                    navigate("/basement");
                }}
            >
                <BasementIcon active={activePage === basement} />
                <span className={b("button-text")}>{t("basementLabel")}</span>
            </button>
            <button
                className={b("button", { active: activePage === universes })}
                onClick={() => {
                    setActivePage(universes);
                    navigate("/home");
                }}
            >
                <UniversesIcon active={activePage === universes} />
                <span className={b("button-text")}>{t("universesLabel")}</span>
            </button>
            <button
                className={b("button", { active: activePage === knowledges })}
                onClick={() => {
                    setActivePage(knowledges);
                    navigate("/knowledges");
                }}
            >
                <KnowledgeIcon active={activePage === knowledges} />
                <span className={b("button-text")}>{t("knowledgeLabel")}</span>
            </button>
        </div>
    );
};

export default NavBar;
