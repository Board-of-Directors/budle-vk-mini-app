import style from "./OrderCard.module.css"
import {EstablishmentCard} from "../establishment-card/ui/EstablishmentCard";
import TextS from "../../shared/text/text-s/TextS";
import Button from "../../shared/buttons/button/Button";
import {useStore} from "../../store/Store";
import {parseDate} from "../../lib/parseDate";
import {parseStatus} from "../../lib/parseStatus";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";
import {useMutation, useQuery} from "react-query";

const OrderCard = ({orderCard}) => {

    const [establishment, getEstablishment] = useStore(
        useShallow(state => [state.establishment, state.getEstablishment])
    )

    const [cancelOrder, confirmOrder] = useStore(
        useShallow(state => [state.cancelOrder, state.confirmOrder])
    )

    const cancelMutation = useMutation({
        mutationKey : ["/user/order/cancel", orderCard.id],
        mutationFn : () => cancelOrder(orderCard.id)
    })

    const confirmMutation = useMutation({
        mutationKey : ["/user/order/confirm", orderCard.id],
        mutationFn : () => confirmOrder(orderCard.id),
    })

    const getEstablishmentQuery = useQuery({
        queryKey : ["establishment", orderCard.establishmentId],
        queryFn : () => getEstablishment(orderCard.establishmentId)
    })

    const handleOnClick = (nextStatus) => {
        if (nextStatus === 4) cancelMutation.mutate()
        else confirmMutation.mutate()
    }

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

            {
                getEstablishmentQuery.isSuccess ? <EstablishmentCard
                    fullWidth={true} card={establishment}/> :
                    getEstablishmentQuery.isLoading ?
                        <div>Loading..</div> : null
            }

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

                <section className={"w-full flex flex-row gap-[10px]"}>
                    {
                        orderCard.userActionList.map((action, key) => {
                            return <Button
                                key={key}
                                text={action.actionName}
                                bgColor={"#EEF5F9"}
                                onClick={() => handleOnClick(action.nextStatus)}
                            />
                        })
                    }
                </section>

            </div>
        </div>
    )
}

export default OrderCard
