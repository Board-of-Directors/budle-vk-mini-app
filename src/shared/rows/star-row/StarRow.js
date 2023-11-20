import style from "./StarRow.module.css"
import {FiStar} from "react-icons/fi";

const StarRow = ({amount}) => {
    return (
        <div className={style.wrapper}>
            {
                Array.from({length: amount}, () => {
                    return <FiStar size={"15px"} fill={"#FFEF61"}/>
                })
            }
        </div>
    )
}

export default StarRow