import Bem from "../../../helpers/Bem";
import SimpleCard from "../../Template/SimpleCard/SimpleCard";
import './StoryCard.style.scss';

const StoryCard = ({ title, description }) => {
    const bem = Bem('story-card');
  
    return (
        <SimpleCard gap="16px">
            <h4 className={bem("title")}>{title}</h4>
            <p className={bem("description")} dangerouslySetInnerHTML={{__html:description}}></p>
        </SimpleCard>
    );
  };

  export default StoryCard;
