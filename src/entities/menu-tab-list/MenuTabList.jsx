import style from "./MenuTabList.module.css"
import {FiHeart, FiList, FiMessageCircle, FiSettings} from "react-icons/fi";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import MenuTab from "../../shared/tabs/menu-tab/MenuTab";

const MenuTabList = () => {

    const routeNavigator = useRouteNavigator()

    const tabList = [
        {
            name: "Избранное",
            icon: <FiHeart className={style.icon}/>,
            onClick: () => routeNavigator.push("/favorites")
        },
        {
            name: "Настройки",
            icon: <FiSettings className={style.icon}/>,
            onClick: () => routeNavigator.push("/user-menu/settings")
        },
        {
            name: "Мои брони",
            icon: <FiList className={style.icon}/>,
            onClick: () => routeNavigator.push("/user-menu/orders")
        },
        {
            name: "Мои отзывы",
            icon: <FiMessageCircle className={style.icon}/>,
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
