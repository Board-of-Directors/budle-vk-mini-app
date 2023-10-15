import style from "./TextXL.module.css"

const TextXL = ({text, color="#181818"}) => {
    return (
        <div className={style.text} style={{color: color}}>
            {text}
        </div>
    )
}

export default TextXL