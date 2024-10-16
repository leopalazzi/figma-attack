/** @format */
import Bem from "../../helpers/Bem";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import "./HomeOnBoarding.style.scss";
import ActionButton from "../../components/Atoms/ActionButton/ActionButton";
import FireIcon from "../../icons/FireIcon/FireIcon";
import { useNavigate } from "react-router-dom";
import onBoardingHomeImg from "../../assets/onboarding-home.svg";

const HomeOnBoarding = () => {
    const bem = Bem("home-on-boarding");
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/onboarding/1");
    };

    return (
        <div>
            <div className={bem("container")}>
                <div className={bem("welcome-container")}>
                    <img src={logo} />
                    <h2 className={bem("welcome-label")}>{t("homeOnBoarding.welcomeLabel")}</h2>
                </div>
                <div className={bem("content")}>
                    <div className={bem("text")}>
                        <h3 className={bem("subtitle")}>{t("homeOnBoarding.subtitle")}</h3>
                        <p className={bem("description")}>{t("homeOnBoarding.description")}</p>
                    </div>
                    <ActionButton
                        label={"Let's go"}
                        icon={<FireIcon active={true} />}
                        onClick={onClick}
                    />
                </div>
            </div>
            <img
                src={onBoardingHomeImg}
                className={bem("img")}
                alt=""
            />
        </div>
    );
};

export default HomeOnBoarding;
