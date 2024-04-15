/** @format */
import { FunctionComponent } from "react";
import "./MinifyPage.style.scss";
import minifyLogo from "../../assets/minify-logo.svg";
import resizeLogo from "../../assets/resize-logo.svg";
import { useNavigate } from 'react-router-dom';

const MinifyPage: FunctionComponent<any> = () => {
    const navigate = useNavigate();

    const onClick = (event)=> {
        event.preventDefault();
        navigate("/home");
        parent.postMessage({ pluginMessage: { type: 'unminify-plugin'} }, '*');
        // window.open("https://google.fr")
      }

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
