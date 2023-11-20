import {Panel} from "@vkontakte/vkui";
import style from "../user-settings/UserSettingsScreen.module.css"
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";
import EstablishmentCardDescr from "../../../features/establishment-card-descr/EstablishmentCardDescr";
import {useEffect} from "react";
import HeaderCloseRow from "../../../shared/rows/header-close-row/HeaderCloseRow";

const UserFavoritesScreen = ({nav}) => {

    const [favorites, getFavorites] = useStore(
        useShallow(state => [state.favorites, state.getFavorites])
    )

    useEffect(() => {
        getFavorites()
    }, [])

    return (
        <Panel nav={nav}>
            <div className={style.wrapper}>
                <HeaderCloseRow header={"Избранное"}/>
                {
                    favorites.map((card) => {
                        return <EstablishmentCardDescr card={card} />
                    })
                }
            </div>
        </Panel>
    )
}

export default UserFavoritesScreen
