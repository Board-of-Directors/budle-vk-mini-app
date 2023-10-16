import style from "./WorkingHoursRow.module.css"
import HeaderContentCol from "../../wrappers/header-content-col/HeaderContentCol";
import TextM from "../../text/text-m/TextM";

const WorkingHoursRow = (props) => {

    const workingHours = [
        {
            date: "Пн-Пт",
            hours: "10:00-21:00"
        },
        {
            date: "Сб",
            hours: "11:00-19:00"
        },
        {
            date: "Вс",
            hours: "Выходной"
        }
    ]

    return (
        <HeaderContentCol header={"Часы работы"}>
            <div className={style.wrapper}>
                {
                    workingHours.map((date) => {
                        return <div className={style.row}>
                            <TextM text={date.date}/>
                            <TextM text={date.hours}/>
                        </div>
                    })
                }
            </div>
        </HeaderContentCol>
    )
}

export default WorkingHoursRow