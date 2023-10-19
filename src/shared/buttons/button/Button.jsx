import style from "./Button.module.css"
import TextM from "../../text/text-m/TextM";

const Button = ({text, bgColor = "#654DF6", icon, onClick}) => {

    const textColor = bgColor === "#654DF6" ? "#FFFFFF" : "#181818"

    return (
        <div
            className={style.wrapper}
            style={{backgroundColor: bgColor}}
            onClick={() => onClick()}
        >
            {icon}
            <TextM text={text} color={textColor} />
        </div>
    )
}

export default Button