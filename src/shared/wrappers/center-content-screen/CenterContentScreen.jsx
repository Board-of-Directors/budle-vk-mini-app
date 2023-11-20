import style from "./CenterContentScreen.module.css"

const CenterContentScreen = (props) => {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}

export default CenterContentScreen