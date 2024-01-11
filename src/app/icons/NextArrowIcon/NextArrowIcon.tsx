import "./NextArrowIcon.style.scss";

const NextArrowIcon = ({universeCode}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" className={`next-arrow-${universeCode}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
  };
  
  export default NextArrowIcon;
  