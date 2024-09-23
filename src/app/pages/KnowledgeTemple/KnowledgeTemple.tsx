/** @format */

import { useEffect, useState } from "react";
import InlineFilters from "../../components/Molecules/InlineFilters/InlineFilters";
import YoutubeVideos from "../../components/Organisms/YoutubeVideos/YoutubeVideos";
import Layout from "../../components/Template/Layout/Layout";
import { availableFilters, filtersType, knowledgesVideo } from "../../config/knowledges.config";
import TitleWithDescription from "../../components/Molecules/TitleWithDescription/TitleWithDescription";

const KnowledgeTemple = () => {
    const [filteredVideos, setFilteredVideos] = useState(knowledgesVideo);
    const [activeFilter, setActiveFilter] = useState(filtersType.allVideos);

    useEffect(() => {
        if (activeFilter === filtersType.allVideos) {
            setFilteredVideos(knowledgesVideo);
        } else if (activeFilter) {
            const filteredVideos = knowledgesVideo.filter((video) => {
                return video.filters.includes(activeFilter);
            });
            setFilteredVideos(filteredVideos);
        }
    }, [activeFilter]);

    return (
        <Layout>
            <div style={{ padding: "24px 40px" }}>
                <TitleWithDescription
                    title="Knowledge Base"
                    description="Here, you can found a lot of ressources from awesome Designers"
                />
            </div>
            <div style={{ padding: "0 40px 24px 40px", display: "flex", flexDirection: "column", gap: "24px" }}>
                <InlineFilters
                    filters={availableFilters}
                    setActiveFilter={setActiveFilter}
                    activeFilter={activeFilter}
                />
                <YoutubeVideos videosData={filteredVideos} />
            </div>
        </Layout>
    );
};

export default KnowledgeTemple;
