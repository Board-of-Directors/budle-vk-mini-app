import style from "./TextL.module.css"

const TextL = ({text, color}) => {
    return (
        <div className={style.text} style={{color: color}}>
            {text}
        </div>
    )
}

export default TextL