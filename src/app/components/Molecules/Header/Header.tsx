import Bem from '../../../helpers/Bem';
import './Header.style.scss';
import logo from "../../../assets/logo.svg";
import discordLogo from "../../../assets/discord_header.svg";

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const b = Bem('header');
  const navigate = useNavigate();

  const onClick = (event)=> {
    event.preventDefault();
    navigate("/minify");
    parent.postMessage({ pluginMessage: { type: 'minify-plugin'} }, '*');
    // window.open("https://google.fr")
  }


  return (
    <header className={b('container')}>
      <a onClick={onClick} href="https://google.fr"><img src={logo} alt="Figmattack logo"/></a>
      <a href="https://discord.gg/HXEen8pe"><img src={discordLogo} alt="Figmattack Discord"/></a>
    </header>
  );
};

export default Header;
