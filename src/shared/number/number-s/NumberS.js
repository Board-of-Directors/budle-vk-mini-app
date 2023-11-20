import style from "./NumberS.module.css"

const NumberS = ({number, color = "#181818"}) => {
    return (
        <div className={style.number} style={{color: color}}>
            {number}
        </div>
    )
}

export default NumberS