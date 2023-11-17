import style from "./OrderCard.module.css"
import {EstablishmentCard} from "../establishment-card/ui/EstablishmentCard";
import TextS from "../../shared/text/text-s/TextS";
import Button from "../../shared/buttons/button/Button";
import {useStore} from "../../store/Store";
import {parseDate} from "../../lib/parseDate";
import {parseStatus} from "../../lib/parseStatus";

const OrderCard = ({orderCard}) => {

    const deleteOrder = useStore(state => state.deleteOrder)

    const {day, month} = parseDate(orderCard.date)
    const status = parseStatus(orderCard.status)

    const prefix = `${day} ${month}`
    const startTime = `${orderCard.startTime.substring(0, 5)}, ${prefix}`
    const endTime = `${orderCard.endTime.substring(0, 5)}, ${prefix}`

    const orderData = [
        {header: "Статус", data: status.name},
        {header: "Начало", data: startTime},
        {header: "Конец", data: endTime},
        {header: "Количество гостей", data: orderCard.guestCount},
        {header: "Бронь на имя", data: orderCard.guestName},
    ]

    return (
        <div className={style.wrapper}>
            <EstablishmentCard fullWidth={true} card={orderCard.establishment}/>
            <div className={style.orderData}>
                {
                    orderData.map((infoRow) => {
                        return <div className={style.infoRow}>
                            <TextS text={infoRow.header} color={"#B6C1CE"}/>
                            <TextS text={infoRow.data} color={
                                infoRow.data === status.name ? status.color : "#181818"
                            }/>
                        </div>
                    })
                }
                <Button
                    text={"Отменить бронь"}
                    bgColor={"#EEF5F9"}
                    onClick={() => deleteOrder(orderCard.id)}
                />
            </div>
        </div>
    )
}

export default OrderCard
