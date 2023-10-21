import style from "./TextInput.module.css"
import {useState} from "react";
import TextM from "../../text/text-m/TextM";
import PasswordEyeButton from "../../buttons/password-eye-button/PasswordEyeButton";

const TextInput = ({label, placeholder, onChange, _type = "text"}) => {

    const [type, setType] = useState(_type)
    const toggledType = type === "password" ? "text" : "password"

    return (
        <div className={style.wrapper}>
            <TextM text={label} color={"#B6C1CE"}/>
            <div className={style.inputIcon}>
                {
                    _type === "password" ?
                        <PasswordEyeButton
                            onClick={() => setType(toggledType)}
                        />
                        : null
                }
                <input
                    className={style.input}
                    placeholder={placeholder}
                    onChange={(event) => onChange(event.target.value)}
                    type={type}
                />
            </div>
        </div>
    )
}

export default TextInput