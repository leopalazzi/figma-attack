/** @format */

import { useNavigate } from "react-router-dom";
import Bem from "../../../helpers/Bem";
import "./Breadcrumb.style.scss";

const Breadcrumb = ({ linksData }) => {
    const navigate = useNavigate();
    const b = Bem("breadcrumb");

    const onClickLink = (e, url) => {
        e.preventDefault();
        navigate(url);
    };

    return (
        <div className={b("container")}>
            {linksData.map((linkData, index) => {
                return (
                    <div
                        key={`breadcrumb-link-${index}`}
                        className={b("link-container")}
                    >
                        <span className={b("arrow")}>{"<"}</span>
                        <a
                            onClick={(event) => {
                                onClickLink(event, linkData.url);
                            }}
                            className={b("link", { current: linkData.current })}
                        >
                            {linkData.label}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default Breadcrumb;
