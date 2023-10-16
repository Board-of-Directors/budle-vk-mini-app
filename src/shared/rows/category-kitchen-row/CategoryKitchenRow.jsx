import style from "./CategoryKitchenRow.module.css"
import TextS from "../../text/text-s/TextS";

const CategoryKitchenRow = (props) => {

    const budleGrayColor = "#B6C1CE"

    return (
        <div className={style.row}>
            <TextS text={props.category} color={budleGrayColor}/>
            <div className={style.separator} />
            <TextS text={props.kitchen} color={budleGrayColor}/>
        </div>
    )
}

export default CategoryKitchenRow