import style from "./SearchBarRow.module.css"
import SearchBar from "../../../shared/inputs/search-bar/SearchBar";
import {FiMap, FiMenu} from "react-icons/fi";

export const SearchBarRow = (props) => {
    return (
        <div className={style.wrapper}>
            <SearchBar placeholder={"Поиск"} onChange={props.onChange}/>
            <FiMap size={"20px"} className={style.icon}/>
            <FiMenu size={"20px"} className={style.icon}/>
        </div>
    )
}

export default SearchBarRow