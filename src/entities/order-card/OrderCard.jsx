import style from "./OrderCard.module.css"
import {EstablishmentCard} from "../establishment-card/ui/EstablishmentCard";
import TextS from "../../shared/text/text-s/TextS";

const OrderCard = ({orderCard}) => {

    const prefix = orderCard.date.substring(0, 7)
    const startTime = `${orderCard.startTime.substring(0, 5)}, ${prefix}`
    const endTime = `${orderCard.endTime.substring(0, 5)}, ${prefix}`

    const orderData = [
        {header: "Статус", data: orderCard.status},
        {header: "Начало", data: startTime},
        {header: "Конец", data: endTime},
        {header: "Количество гостей", data: orderCard.guestCount},
        {header: "Бронь на имя", data: orderCard.username},
    ]

    return (
        <div className={style.wrapper}>
            <EstablishmentCard fullWidth={true} card={orderCard.establishment}/>
            <div className={style.orderData}>
                {
                    orderData.map((infoRow) => {
                        return <div className={style.infoRow}>
                            <TextS text={infoRow.header} color={"#B6C1CE"}/>
                            <TextS text={infoRow.data}/>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default OrderCard
