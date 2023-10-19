import style from "./BookingDayRow.module.css"
import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";
import BookingDayTag from "../../../shared/tags/booking-day-tag/BookingDayTag";
import {useShallow} from "zustand/react/shallow";
import {useBookingMenuStore} from "../../../panels/booking-menu/api/BookingMenuStore";
import {useEffect} from "react";

const BookingDayRow = () => {

    const [selectedTag, tagList, selectTag] = useBookingMenuStore(
        useShallow((state) => [
            state.selectedDayTag, state.dayTagList, state.selectDayTag
        ])
    )

    useEffect(() => {

    }, [])

    return (
        <HeaderContentCol header={"День"}>
            <div className={style.wrapper}>
                {
                    tagList.map((dayTag) => {
                        return <BookingDayTag
                            selectedTag={selectedTag}
                            onClick={(tag) => selectTag(tag)}
                            tag={dayTag}
                        />
                    })
                }
            </div>
        </HeaderContentCol>
    )
}

export default BookingDayRow