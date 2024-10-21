/** @format */

import { FunctionComponent } from "react";
import "./YoutubeVideo.style.scss";
import Bem from "../../../helpers/Bem";

export const YoutubeVideo: FunctionComponent<any> = ({ videoData }) => {
    const b = Bem("youtube-video");

    return (
        <div className={b("container")}>
            <iframe
                id="player"
                key={videoData.id}
                width="100%"
                height="254px"
                src={`https://www.youtube.com/embed/${videoData.id}?enablejsapi=1`}
                frameBorder="0"
                style={{ borderRadius: "8px" }}
                title={videoData.title}
            />
            <h3 className={b("title")}>{videoData.title}</h3>
        </div>
    );
};

export default YoutubeVideo;
