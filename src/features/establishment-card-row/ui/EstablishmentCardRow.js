import style from "./EstablismentCardRow.module.css"
import {EstablishmentCard} from "../../../entities/establishment-card/ui/EstablishmentCard";
import CategoryAmountRow from "../../../shared/rows/category-amount-row/CategoryAmountRow";
import {establishmentData} from "../model/establishmentData";

const EstablishmentCardRow = (props) => {

    return (
        <div className={style.col}>

            <CategoryAmountRow header={props.category} amount={props.amount}/>

            <div className={style.scrollbar}>
                {
                    establishmentData.map((card) => {
                        return <EstablishmentCard card={card}/>
                    })
                }
            </div>

        </div>
    )
}

export default EstablishmentCardRow