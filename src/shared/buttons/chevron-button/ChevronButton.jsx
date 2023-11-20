import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const ChevronButton = ({isExpanded, onClick}) => {
    return (
        <div onClick={() => onClick()}>
            {
                isExpanded ? <FiChevronUp
                    size={"20px"}
                    className={"stroke-text-bulde-gray"}
                /> : <FiChevronDown
                    size={"20px"}
                    className={"stroke-text-bulde-gray"}
                />
            }
        </div>
    )

};

export default ChevronButton;
