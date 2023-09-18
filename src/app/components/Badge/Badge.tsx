import { FunctionComponent } from "react";
import Bem from '../../helpers/Bem';
import './Badge.style.scss';

export const Badge: FunctionComponent<any> = ({children, univers}) => {
    const b = Bem('badge');

    return( <span className={b("span", {univers: univers})}>{children}</span>)
}

export default Badge;