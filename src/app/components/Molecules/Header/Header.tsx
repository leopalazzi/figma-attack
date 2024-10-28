/** @format */

import Bem from "../../../helpers/Bem";
import "./Header.style.scss";
import logo from "../../../assets/logo.svg";
import discordLogo from "../../../assets/discord_header.svg";
import instagramLogo from "../../../assets/instagram_header.svg";

import { useNavigate } from "react-router-dom";

const discordLink = "https://discord.gg/qptSjkuYNt";
const instagramLink = "https://www.instagram.com/figmattack";

const Header = () => {
    const b = Bem("header");
    const navigate = useNavigate();

    const onClick = (event) => {
        event.preventDefault();
        navigate("/minify");
        parent.postMessage({ pluginMessage: { type: "minify-plugin" } }, "*");
    };

    const onClickDiscord = (event) => {
        event.preventDefault();
        window.open(discordLink);
    };

    const onClickInstagram = (event) => {
        event.preventDefault();
        window.open(instagramLink);
    };

    return (
        <header className={b("container")}>
            <button
                onClick={onClick}
                className={b("figma-logo")}
            >
                <img
                    src={logo}
                    alt="Hidden feature"
                />
            </button>
            <div className={b("logo-container")}>
                <a
                    href={instagramLink}
                    onClick={onClickInstagram}
                    aria-label="Go to instagram"
                >
                    <img
                        src={instagramLogo}
                        alt=""
                    />
                </a>
                <a
                    href={discordLink}
                    onClick={onClickDiscord}
                    aria-label="Go to discord"
                >
                    <img
                        src={discordLogo}
                        alt=""
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
