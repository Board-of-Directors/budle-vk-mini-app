import style from "./TextM.module.css"

const TextM = ({text, color = "#181818"}) => {
    return (
        <div className={style.text} style={{color: color}}>
            {text}
        </div>
    )
}

export default TextM