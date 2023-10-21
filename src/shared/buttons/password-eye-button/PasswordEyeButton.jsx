import style from "./PasswordEyeButton.module.css"
import {useState} from "react";
import {FiEye, FiEyeOff} from "react-icons/fi";

const PasswordEyeButton = ({onClick}) => {

    const [isVisible, setVisible] = useState(false)

    return (
        <div>
            {
                isVisible ? <FiEye
                    size={"18px"}
                    className={style.icon}
                    onClick={() => {
                        setVisible(prevState => !prevState)
                        onClick()
                    }
                    }
                /> : <FiEyeOff
                    size={"18px"}
                    className={style.icon}
                    onClick={() => {
                        setVisible(prevState => !prevState)
                        onClick()
                    }
                }
                />
            }
        </div>
    )
}

export default PasswordEyeButton