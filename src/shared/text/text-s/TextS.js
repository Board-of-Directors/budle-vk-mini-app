import style from "./TextS.module.css"

const TextS = ({text, color}) => {
    return (
        <div className={style.text} style={{color: color}}>
            {text}
        </div>
    )
}

export default TextS