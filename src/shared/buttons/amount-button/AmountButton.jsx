import style from "./AmountButton.module.css"
import {FiMinus, FiPlus} from "react-icons/fi";

const AmountButton = ({icon, onClick}) => {
    return (
        <div className={style.wrapper}>
            {
                icon === "minus" ? <FiPlus
                    size={"18px"}
                    className={style.icon}
                    onClick={() => onClick()}
                /> : <FiMinus
                    size={"18px"}
                    className={style.icon}
                    onClick={() => onClick()}
                />
            }
        </div>
    )
}

export default AmountButton