import style from "./Text2XL.module.css"

const Text2XL = ({text, color}) => {
    return (
        <div className={style.text} style={{color: color}}>
            {text}
        </div>
    )
}

export default Text2XL