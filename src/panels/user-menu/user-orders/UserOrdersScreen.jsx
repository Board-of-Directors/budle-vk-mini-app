import style from "./UserOrders.module.css"
import HeaderCloseRow from "../../../shared/rows/header-close-row/HeaderCloseRow";
import FilterTagRow from "../../../entities/filter-tag-row/ui/FilterTagRow";
import {useEffect, useState} from "react";
import {useStore} from "../../../store/Store";
import {useShallow} from "zustand/react/shallow";
import OrderCard from "../../../entities/order-card/OrderCard";

const UserOrdersScreen = () => {

    const [statusTagList, getOrders] = useStore(
        useShallow(state => [state.statusTagList, state.getOrders])
    )
    const orderList = useStore(state => state.orderList)
    const [activeTag, setActive] = useState(statusTagList[0])

    useEffect(() => {
        getOrders(activeTag.id)
    }, [activeTag])

    return (
        <div className={style.wrapper}>
            <HeaderCloseRow header={"Мои брони"}/>
            <FilterTagRow
                tagList={statusTagList}
                activeTag={activeTag}
                setActive={(tag) => setActive(tag)}
            />
            {
                (orderList !== null && orderList !== undefined) && orderList.map((orderCard) => {
                    return <OrderCard orderCard={orderCard} />
                })
            }
        </div>
    )
}

export default UserOrdersScreen
