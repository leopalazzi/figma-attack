/** @format */
import { FunctionComponent, useContext } from "react";
import "./MinifyPage.style.scss";
import minifyLogo from "../../assets/minify-logo.svg";
import resizeLogo from "../../assets/resize-logo.svg";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../store/appContext";

const MinifyPage: FunctionComponent<any> = () => {
    const navigate = useNavigate();
    const { currentPagePath } = useContext(AppContext);

    const onClick = (event) => {
        event.preventDefault();
        navigate(currentPagePath);
        parent.postMessage({ pluginMessage: { type: "unminify-plugin" } }, "*");
    };

    return (
        <div className="minify-page">
            <img
                alt="minify logo Figmattack"
                title="Minify Figmattack image"
                src={minifyLogo}
                tabIndex={0}
                onClick={onClick}
                className="minify-logo"
            />
            <img
                alt="resize logo"
                title="Resize Figmattack plugin"
                className="resize-logo"
                src={resizeLogo}
            />
        </div>
    );
};

export default MinifyPage;
