import style from "./RatingRow.module.css"
import DescrTag from "../../shared/tags/descr-tag/DescrTag";
import TextM from "../../shared/text/text-m/TextM";
import {FiHeart, FiShare} from "react-icons/fi";

const RatingRow = (props) => {
    return (
        <div className={style.row}>

            <div className={style.ratingRow}>
                <DescrTag descr={props.rating}/>
                <TextM text={"Рейтинг"} color={"#B6C1CE"}/>
            </div>

            <div className={style.iconRow}>
                <FiShare
                    size={"20px"}
                    className={style.icon}
                    onClick={() => props.onShare()}
                />
                <FiHeart
                    size={"20px"}
                    className={style.icon}
                    onClick={() => props.onFavorite()}
                />
            </div>

        </div>
    )
}

export default RatingRow