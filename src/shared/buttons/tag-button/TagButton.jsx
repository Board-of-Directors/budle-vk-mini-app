import style from "./TagButton.module.css"

const TagButton = (props) => {
    return (
        <div className={style.tag} onClick={() => props.onClick()}>
            {props.icon}
            {props.text}
        </div>
    )
}

export default TagButton