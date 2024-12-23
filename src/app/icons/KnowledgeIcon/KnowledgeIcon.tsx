/** @format */

const KnowledgeIcon = ({ active }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
        >
            <path
                d="M10.9995 11.0001H11.0095M14.535 14.5357C9.84876 19.222 4.46685 21.438 2.51423 19.4854C0.561611 17.5328 2.77769 12.1509 7.46398 7.46461C12.1503 2.77832 17.5322 0.56224 19.4848 2.51486C21.4374 4.46748 19.2213 9.84938 14.535 14.5357ZM14.535 7.46443C19.2213 12.1507 21.4374 17.5326 19.4848 19.4852C17.5321 21.4379 12.1502 19.2218 7.46394 14.5355C2.77765 9.8492 0.561571 4.4673 2.51419 2.51468C4.46681 0.562059 9.84872 2.77814 14.535 7.46443ZM11.4995 11.0001C11.4995 11.2763 11.2757 11.5001 10.9995 11.5001C10.7234 11.5001 10.4995 11.2763 10.4995 11.0001C10.4995 10.724 10.7234 10.5001 10.9995 10.5001C11.2757 10.5001 11.4995 10.724 11.4995 11.0001Z"
                stroke={active ? "#F6F6F6" :  "#1F1F1F"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default KnowledgeIcon;
