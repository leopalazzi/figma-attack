/** @format */

const BasementIcon = ({active}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
        >
            <g clipPath="url(#clip0_582_22709)">
                <path
                    d="M13.5 5.7V4H16.5L15.5 2.51L16.5 1H11.5V5.7L2.5 12V22H9.5V17L12.53 15L15.5 17V22H22.5V12L13.5 5.7Z"
                    fill={active ? "#F6F6F6" :  "#1F1F1F"}
                />
            </g>
            <defs>
                <clipPath id="clip0_582_22709">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default BasementIcon;
