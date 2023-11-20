import style from "./TextXS.module.css"

const TextXS = ({text, color}) => {
    return (
        <div className={style.wrapper} style={{color: color}}>
            {text}
        </div>
    )
}

export default TextXS