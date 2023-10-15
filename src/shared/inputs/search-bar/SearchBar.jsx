import style from "./SearchBar.module.css"

const SearchBar = (props) => {
    return (
        <input
            className={style.wrapper}
            placeholder={props.placeholder}
            onChange={(event) => props.onChange(event.target.value)}
        />
    )
}

export default SearchBar