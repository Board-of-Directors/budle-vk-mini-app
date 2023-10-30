import style from "./SearchBarRow.module.css"
import SearchBar from "../../../shared/inputs/search-bar/SearchBar";
import {FiMap, FiMenu, FiX} from "react-icons/fi";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

export const SearchBarRow = ({isExpanded = false, onClick, ...props}) => {

    const routeNavigator = useRouteNavigator()

    return (
        <div className={style.wrapper}>
            <SearchBar
                isExpanded={isExpanded}
                placeholder={"Поиск"}
                onChange={props.onChange}
                onClick={() => !isExpanded ? routeNavigator.push("/establishment-search") : {}}
            />
            {
                isExpanded ? null : <div className={style.iconRow}>
                    <FiMap size={"20px"} className={style.icon}/>
                    <FiMenu
                        size={"20px"}
                        className={style.icon}
                        onClick={() => routeNavigator.push("/user-menu")}
                    />
                </div>
            }

        </div>
    )
}

export default SearchBarRow