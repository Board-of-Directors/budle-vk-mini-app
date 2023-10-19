import style from "./WorkingHoursRow.module.css"
import HeaderContentCol from "../../wrappers/header-content-col/HeaderContentCol";
import TextM from "../../text/text-m/TextM";

const WorkingHoursRow = (props) => {
    return (
        <HeaderContentCol header={"Часы работы"}>
            <div className={style.wrapper}>
                {
                    props.workingHours.map((workingHours) => {

                        const fromToTime = `${workingHours.startTime.substring(0, 5)}
                        — ${workingHours.endTime.substring(0, 5)}`

                        return <div className={style.row}>
                            <TextM text={workingHours.dayOfWeek}/>
                            <TextM text={fromToTime}/>
                        </div>
                    })
                }
            </div>
        </HeaderContentCol>
    )
}

export default WorkingHoursRow