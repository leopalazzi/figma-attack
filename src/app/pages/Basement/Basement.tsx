/** @format */

import { useTranslation } from "react-i18next";
import Layout from "../../components/Template/Layout/Layout";
import "./Basement.style.scss";
import TitleWithDescription from "../../components/Molecules/TitleWithDescription/TitleWithDescription";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../store/appContext";
import Bem from "../../helpers/Bem";
import basementImg from "../../assets/basement/basement_img.svg";
import ActionButton from "../../components/Atoms/ActionButton/ActionButton";

const Basement = () => {
    const { t } = useTranslation();
    // const navigate = useNavigate();
    const { setActivePage } = useContext(AppContext);
    const b = Bem("basement");

    // const universes: Array<any> = t("universes", { returnObjects: true });
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
                <img
                    src={basementImg}
                    alt=""
                />
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
