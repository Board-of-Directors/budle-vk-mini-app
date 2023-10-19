import style from "./BookingMenuPopup.module.css"
import GuestAmountController from "../../../entities/guest-amout-controller/ui/GuestAmountController";
import BookingDayRow from "../../../entities/booking-day-row/ui/BookingDayRow";
import BookingTimeRow from "../../../entities/time-tag-row/ui/BookingTimeRow";
import BookingPreferencesGrid from "../../../entities/preferences-tag-grid/ui/BookingPreferencesGrid";
import Button from "../../../shared/buttons/button/Button";
import {FiMap} from "react-icons/fi";
import {useBookingMenuStore} from "../api/BookingMenuStore";
import {useEffect} from "react";
import BookingHeaderRow from "../../../entities/booking-header-row/ui/BookingHeaderRow";

const BookingMenuPopup = ({establishmentId, onClose}) => {

    const getTimeSchedule = useBookingMenuStore((state) => state.getTimeSchedule)

    useEffect(() => {
        getTimeSchedule(establishmentId)
    }, []);

    return (
        <div className={style.wrapper}>

            <BookingHeaderRow header={"Горячий Цех"} onClose={onClose} />

            <GuestAmountController />
            <BookingDayRow/>
            <BookingTimeRow/>

            <div className={style.buttonCol}>
                <Button
                    text={"Выбрать место на карте"}
                    onClick={() => console.log("Выбрать место на карте")}
                    bgColor={"#EEF5F9"}
                    icon={
                        <FiMap
                            size={"18px"}
                            style={{color: "#181818"}}
                        />
                    }
                />
                <Button
                    text={"Забронировать"}
                    onClick={() => console.log("Забронировать")}
                />
            </div>

        </div>
    )
}

export default BookingMenuPopup