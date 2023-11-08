import style from "./UserOrders.module.css"
import HeaderCloseRow from "../../../shared/rows/header-close-row/HeaderCloseRow";
import FilterTagRow from "../../../entities/filter-tag-row/ui/FilterTagRow";
import {useEffect} from "react";
import {useStore} from "../../../store/Store";
import {useShallow} from "zustand/react/shallow";
import OrderCard from "../../../entities/order-card/OrderCard";
import {Panel} from "@vkontakte/vkui";
import InformationScreen from "../../information-screen/InformationScreen";

import GhostFace from "../../../images/ghost.png"
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const UserOrdersScreen = ({nav}) => {

    const routerNavigator = useRouteNavigator()

    const [statusTagList, getOrders] = useStore(
        useShallow(state => [state.statusTagList, state.getOrders])
    )
    const orderList = useStore(state => state.orderList)
    const [activeTag, setActive] = useStore(
        useShallow(state => [state.selectedStatusTag, state.selectStatusTag])
    )

    useEffect(() => {
        getOrders(activeTag.id)
    }, [activeTag])

    return (
        <Panel nav={nav}>
            <div className={style.wrapper}>
                <HeaderCloseRow header={"Мои брони"}/>
                <FilterTagRow
                    tagList={statusTagList}
                    activeTag={activeTag}
                    setActive={(tag) => setActive(tag)}
                />
                {
                    orderList === null || orderList === undefined || orderList.length === 0
                        ? <InformationScreen
                            icon={GhostFace}
                            header={"Ой! Похоже тут пусто"}
                            caption={"Перейдите в карточку заведения,\n чтобы забронировать место"}
                            buttonText={"На главный экран"}
                            onClick={() => routerNavigator.push("/establishment-list")}
                        /> :
                        orderList.map((orderCard) => {
                            return <OrderCard orderCard={orderCard}/>
                        })
                }
            </div>
        </Panel>
    )
}

export default UserOrdersScreen
