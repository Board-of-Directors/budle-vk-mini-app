import style from "./CloseButton.module.css"
import {FiX} from "react-icons/fi";

const CloseButton = (props) => {
    return (
        <div className={style.button}>
            <FiX
                size={"20px"}
                className={style.icon}
                onClick={() => props.onClick()}
            />
        </div>
    )
}

export default CloseButton