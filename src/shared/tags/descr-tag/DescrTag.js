import style from "./DescrTag.module.css"
import NumberS from "../../number/number-s/NumberS";

const DescrTag = ({descr}) => {
    return (
        <span className={style.tag}>
            <NumberS number={descr}/>
        </span>
    )
}

export default DescrTag