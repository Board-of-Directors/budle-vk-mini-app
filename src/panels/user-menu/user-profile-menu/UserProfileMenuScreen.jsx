import style from "./UserProfileMenu.module.css"
import HeaderCloseRow from "../../../shared/rows/header-close-row/HeaderCloseRow";
import MenuTabList from "../../../entities/menu-tab-list/MenuTabList";
import {useStore} from "../../../store/Store"

const UserProfileMenuScreen = () => {

    const nickname = useStore(state => state.nickname)

    return (
        <div className={style.wrapper}>
            <HeaderCloseRow header={nickname} />
            <MenuTabList />
        </div>
    )
}

export default UserProfileMenuScreen
