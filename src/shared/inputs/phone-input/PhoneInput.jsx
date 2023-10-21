import style from "./PhoneInput.module.css"
import TextM from "../../text/text-m/TextM";
import InputMask from "react-input-mask"

const PhoneInput = (props) => {
    return (
        <div className={style.wrapper}>
            <TextM text={props.label} color={"#B6C1CE"}/>
            <InputMask
                value={props.value}
                placeholder={props.placeholder}
                onChange={(event) => props.onChange(event.target.value)}
                className={style.input}
                mask={"+9 (999) 999-99-99"}
            />
        </div>
    );
};

export default PhoneInput;
