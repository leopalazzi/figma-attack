import { useEffect, useState } from 'react';
import InlineFilters from '../../components/Molecules/InlineFilters/InlineFilters';
import YoutubeVideos from '../../components/Molecules/YoutubeVideos/YoutubeVideos';
import Layout from '../../components/Template/Layout/Layout';
import { availableFilters, filtersType, knowledgesVideo } from '../../config/knowledges.config';

const KnowledgeTemple = () => {
  const [filteredVideos, setFilteredVideos] = useState(knowledgesVideo);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    if(activeFilter === filtersType.allVideos)
    {
      setFilteredVideos(knowledgesVideo);
    }
    else if (activeFilter) {
      const filteredVideos = knowledgesVideo.filter((video) => {
        return video.filters.includes(activeFilter);
      });
      setFilteredVideos(filteredVideos);
    }
  }, [activeFilter]);

  return (
    <Layout>
      <div>
        <h1>Knowledge Temple</h1>
        <span>Here, you can found a lot of ressources from awesome Designers</span>
      </div>
      <InlineFilters filters={availableFilters} setActiveFilter={setActiveFilter} activeFilter={activeFilter} />
      <YoutubeVideos videosData={filteredVideos} />
    </Layout>
  );
};

export default KnowledgeTemple;
