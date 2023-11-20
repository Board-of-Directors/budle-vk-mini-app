import style from "./SearchBar.module.css"
import {FiX} from "react-icons/fi";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const SearchBar = (props) => {

    const routeNavigator = useRouteNavigator()

    return (
        <div className={style.wrapper}>
            {
                props.isExpanded ? <FiX
                    size={"18px"}
                    className={style.x}
                    onClick={() => routeNavigator.push('/establishment-list')}
                /> : null
            }
            <input
                className={style.input}
                placeholder={props.placeholder}
                onChange={(event) => props.onChange(event.target.value)}
                onClick={() => props.onClick()}
            />
        </div>
    )
}

export default SearchBar