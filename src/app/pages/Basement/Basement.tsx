/** @format */

import { useTranslation } from "react-i18next";
import Layout from "../../components/Template/Layout/Layout";
import "./Basement.style.scss";
import TitleWithDescription from "../../components/Molecules/TitleWithDescription/TitleWithDescription";
import Bem from "../../helpers/Bem";
import ActionButton from "../../components/Atoms/ActionButton/ActionButton";

const Basement = () => {
    const { t } = useTranslation();
    const b = Bem("basement");

    return (
        <Layout>
            <div className={b("container")}>
                <div className={b("heading")}>
                    <span className={b("badge")}>Coming soon</span>
                    <TitleWithDescription
                        title={t("basement.title")}
                        description={t("basement.description")}
                    />
                    <div className={b("button-container")}>
                        <ActionButton label="Discover Universes" />
                        <ActionButton
                            label="Go to Knowledge Base"
                            outline={true}
                        />
                    </div>
                </div>
                {/* <UniverseCards universes={universes} type="horizontal" cardCustomClassName={b("universe-card")} /> */}
            </div>
            {/* <div>
        <div className={b("title-with-button")}>
          <TitleWithDescription
            title={t('basement.title')}
            description={t('basement.knowledgeTemple.description')}
            marginBottom='0px'
          />
          <ActionButton label={"Access Temple"} onClick={() => {setActivePage("knowledges");navigate("/knowledges");}}/>
        </div>
        <YoutubeVideos videosData={knowledgesVideo.splice(-3)}/>
      </div> */}
        </Layout>
    );
};

export default Basement;
