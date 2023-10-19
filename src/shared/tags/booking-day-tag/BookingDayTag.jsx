import style from "./BookingDayTag.module.css"
import TextS from "../../text/text-s/TextS";
import TextXS from "../../text/text-xs/TextXS";

const BookingDayTag = ({tag, selectedTag, onClick}) => {

    const bgColor = selectedTag === tag ? "#654DF6" : "#EEF5F9"
    const textColor = selectedTag === tag ? "#FFFFFF" : "#181818"

    return (
        <div
            className={style.wrapper}
            onClick={() => onClick(tag)}
            style={{backgroundColor: bgColor}}
        >
            <div className={style.col}>
                    <TextS text={tag.dayNumber} color={textColor}/>
                <TextXS text={tag.dayName} color={textColor}/>
            </div>
        </div>
    )
}

export default BookingDayTag