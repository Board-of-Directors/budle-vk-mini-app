import style from "./RatingTag.module.css"
import NumberS from "../../number/number-s/NumberS";

const RatingTag = ({number}) => {
    return (
        <span className={style.tag}>
            <NumberS number={number}/>
        </span>
    )
}

export default RatingTag