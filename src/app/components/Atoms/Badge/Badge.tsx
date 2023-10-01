import { FunctionComponent } from "react";
import Bem from '../../../helpers/Bem';
import './Badge.style.scss';

export const Badge: FunctionComponent<any> = ({children, universe}) => {
    const b = Bem('badge');

    return( <span className={b("span", {universe: universe})}>{children}</span>)
}

export default Badge;