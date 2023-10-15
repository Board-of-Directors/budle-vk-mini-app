import style from "./CategoryAmountRow.module.css"
import TextXL from "../../text/text-xl/TextXL";
import TextM from "../../text/text-m/TextM";

const CategoryAmountRow = (props) => {
    return (
        <div className={style.wrapper}>
            <TextXL text={props.header} />
            <TextM text={props.amount} color={"#B6C1CE"} />
        </div>
    )
}

export default CategoryAmountRow