/** @format */

import { useTranslation } from "react-i18next";
import "./UniverseBanner.style.scss";

const UniverseBanner = () => {
    const { t } = useTranslation();

    return <div className="universe-banner">{t("universeBanner")}</div>;
};

export default UniverseBanner;
