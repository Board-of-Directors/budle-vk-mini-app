import style from "./BookingHeaderRow.module.css"
import TextM from "../../../shared/text/text-m/TextM";
import CloseButton from "../../../shared/buttons/close-button/CloseButton";

const BookingHeaderRow = ({header, onClose}) => {
    return (
        <div className={style.wrapper}>
            <TextM text={header} color={"#B6C1CE"}/>
            <CloseButton onClick={() => onClose()} bgColor={"#EEF5F9"} />
        </div>
    )
}

export default BookingHeaderRow