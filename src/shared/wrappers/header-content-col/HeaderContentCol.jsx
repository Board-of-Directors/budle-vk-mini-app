import style from "./HeaderContentCol.module.css"
import TextL from "../../text/text-l/TextL";

const HeaderContentCol = (props) => {
    return (
        <div className={style.wrapper}>
            <TextL text={props.text} />
            {props.children}
        </div>
    )
}

export default HeaderContentCol