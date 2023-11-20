import style from "./BookingDayRow.module.css"
import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";
import BookingDayTag from "../../../shared/tags/booking-day-tag/BookingDayTag";
import {useShallow} from "zustand/react/shallow";
import {useStore} from "../../../store/Store";

const BookingDayRow = () => {

    const [selectedTag, tagList, selectTag] = useStore(
        useShallow((state) => [
            state.selectedDayTag, state.dayTagList, state.selectDayTag
        ])
    )

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