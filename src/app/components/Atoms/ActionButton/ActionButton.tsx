/** @format */

import { FunctionComponent } from "react";
import "./ActionButton.style.scss";

export const ActionButton: FunctionComponent<any> = ({ label, icon, outline, onClick, disabled }) => {
    return (
        <button
            className={outline ? "action-button action-button-outline" : "action-button"}
            onClick={onClick}
            aria-label={label}
            disabled={disabled}
        >
            {icon}
            {label}
        </button>
    );
};

export default ActionButton;
