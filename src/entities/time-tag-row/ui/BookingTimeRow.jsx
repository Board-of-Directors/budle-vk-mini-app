import style from "./BookingTimeRow.module.css"
import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";
import {FilterTag} from "../../../shared/tags/filter-tag/FilterTag";
import {useEffect, useState} from "react";
import {useBookingMenuStore} from "../../../panels/booking-menu/api/BookingMenuStore";
import {useShallow} from "zustand/react/shallow";

const BookingTimeRow = () => {

    const [selectedTimeTag, selectTime, timeStringList] = useBookingMenuStore(
        useShallow((state) => {
            return [state.selectedTime, state.selectTimeTag,
                state.selectedDayTag === undefined ? [] : state.selectedDayTag.times
            ]
        })
    )

    const timeTagList = timeStringList.map((time, index) => {
        return {id: index, name: time}
    })

    useEffect(() => {
        console.log(selectedTimeTag)
    }, [selectedTimeTag])

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