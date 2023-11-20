import style from "./Text3XL.module.css"

const Text3XL = ({text, color="#181818"}) => {
    return (
        <div className={style.wrapper} style={{color: color}}>
            {text}
        </div>
    )
}

export default Text3XL