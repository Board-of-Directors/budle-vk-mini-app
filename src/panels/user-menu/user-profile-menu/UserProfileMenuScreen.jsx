import style from "./UserProfileMenu.module.css"
import HeaderCloseRow from "../../../shared/rows/header-close-row/HeaderCloseRow";
import MenuTabList from "../../../entities/menu-tab-list/MenuTabList";
import {useStore} from "../../../store/Store"
import {useEffect} from "react";

const UserProfileMenuScreen = () => {

    const nickname = useStore(state => state.nickname)
    const getUserInfo = useStore(state => state.getUser)

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div className={style.wrapper}>
            <HeaderCloseRow header={nickname} />
            <MenuTabList />
        </div>
    )
}

export default UserProfileMenuScreen
