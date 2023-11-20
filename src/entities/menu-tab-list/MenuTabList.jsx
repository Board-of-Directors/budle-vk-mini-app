import style from "./MenuTabList.module.css"
import {FiBell, FiHeart, FiList, FiMessageCircle, FiSettings} from "react-icons/fi";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import MenuTab from "../../shared/tabs/menu-tab/MenuTab";

const MenuTabList = () => {

    const routeNavigator = useRouteNavigator()

    const tabList = [
        {
            name: "Избранное",
            icon: <FiHeart/>,
            onClick: () => routeNavigator.push("/user-menu/favorites")
        },
        {
            name: "Уведомления",
            icon: <FiBell/>,
            onClick: () => routeNavigator.push("/user-menu/notifications")
        },
        {
            name: "Настройки",
            icon: <FiSettings/>,
            onClick: () => routeNavigator.push("/user-menu/settings")
        },
        {
            name: "Мои брони",
            icon: <FiList/>,
            onClick: () => routeNavigator.push("/user-menu/orders")
        },
        {
            name: "Мои отзывы",
            icon: <FiMessageCircle/>,
            onClick: () => {
            }
        }
    ]

    return (
        <div className={style.wrapper}>
            {
                tabList.map((tab) => {
                    return <MenuTab tab={tab}/>
                })
            }
        </div>
    );
};

export default MenuTabList;
