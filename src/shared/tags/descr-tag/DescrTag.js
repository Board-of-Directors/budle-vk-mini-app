import style from "./DescrTag.module.css"
import NumberS from "../../number/number-s/NumberS";

const DescrTag = ({descr, tagColor = "#FFFFFF", textColor = "#181818"}) => {
    return (
        <span className={style.tag} style={{
            backgroundColor: tagColor,
            color: textColor
        }}>
            <NumberS number={descr}/>
        </span>
    )
}

export default DescrTag