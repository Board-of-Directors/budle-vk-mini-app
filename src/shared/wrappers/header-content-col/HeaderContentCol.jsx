import style from "./HeaderContentCol.module.css"
import TextL from "../../text/text-l/TextL";
import TextM from "../../text/text-m/TextM";

const HeaderContentCol = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.headerRow}>
                <TextL text={props.header}/>
                <TextM text={props.subheader} color={"#B6C1CE"}/>
            </div>

            {props.children}
        </div>
    )
}

export default HeaderContentCol