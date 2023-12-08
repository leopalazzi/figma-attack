import { FunctionComponent } from 'react';
import './YoutubeVideos.style.scss';
import YoutubeVideo from '../../Molecules/YoutubeVideo/YoutubeVideo';

export const YoutubeVideos: FunctionComponent<any> = ({ videosData }) => {
  if (!videosData || videosData?.length === 0) {
    return <></>;
  }

  return (
    <div className="youtube-videos-card">
      {videosData.map((video, i) => {
        return (
          <YoutubeVideo videoData={video} key={`youtube-video-${i}`}/>
        );
      })}
    </div>
  );
};

export default YoutubeVideos;
