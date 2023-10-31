import { FunctionComponent } from 'react';
import './YoutubeVideos.style.scss';

export const YoutubeVideos: FunctionComponent<any> = ({ videosData }) => {
  if (!videosData || videosData?.length === 0) {
    return <></>;
  }

  return (
    <div className="youtube-videos-card">
      {videosData.map((video) => {
        return (
          <iframe
            id="player"
            key={video.id}
            className="video-card"
            width="100%"
            height="254px"
            src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
            frameBorder="0"
          />
        );
      })}
    </div>
  );
};

export default YoutubeVideos;
