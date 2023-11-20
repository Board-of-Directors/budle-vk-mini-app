import style from "./CloseButton.module.css"
import {FiX} from "react-icons/fi";

const CloseButton = ({onClick, className = style.button, bgColor = "#FFFFFF"}) => {
    return (
        <div
            className={className}
            style={{backgroundColor: bgColor}}
        >
            <FiX
                size={"20px"}
                className={style.icon}
                onClick={() => onClick()}
            />
        </div>
    )
}

export default CloseButton