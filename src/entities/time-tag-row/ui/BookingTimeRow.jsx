import style from "./BookingTimeRow.module.css"
import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";
import {FilterTag} from "../../../shared/tags/filter-tag/FilterTag";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";

const BookingTimeRow = () => {

    const [selectedTimeTag, selectTime, timeStringList] = useStore(
        useShallow((state) => {
            return [state.selectedTime, state.selectTimeTag,
                state.selectedDayTag === undefined ? [] : state.selectedDayTag.times
            ]
        })
    )

    const timeTagList = timeStringList.map((time, index) => {
        return {id: index, name: time}
    })

    return (
        <HeaderContentCol header={"Время"}>
            <div className={style.wrapper}>
                {
                    timeTagList.map((tag) => {
                        return <FilterTag
                            tag={tag}
                            activeTag={selectedTimeTag}
                            setActive={(tag) => selectTime(tag)}
                        />
                    })
                }
            </div>
        </HeaderContentCol>
    )
}

export default BookingTimeRow