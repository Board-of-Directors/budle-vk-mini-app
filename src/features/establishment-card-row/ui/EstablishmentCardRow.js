import style from "./EstablismentCardRow.module.css"
import {EstablishmentCard} from "../../../entities/establishment-card/ui/EstablishmentCard";
import CategoryAmountRow from "../../../shared/rows/category-amount-row/CategoryAmountRow";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const EstablishmentCardRow = (props) => {

    const routerNavigator = useRouteNavigator()

    return (
        <div className={style.col}>

            <CategoryAmountRow header={props.category} amount={props.amount}/>

            <div className={style.scrollbar}>
                {
                    props.establishments.map((card) => {
                        return <EstablishmentCard
                            card={card}
                            onClick={() => routerNavigator.push(`/establishment-card?id=${card.id}`)}
                        />
                    })
                }
            </div>

        </div>
    )
}

export default EstablishmentCardRow