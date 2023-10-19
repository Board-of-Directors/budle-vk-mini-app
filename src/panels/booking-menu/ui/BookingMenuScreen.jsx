import style from "./BookingMenuScreen.module.css"
import GuestAmountController from "../../../entities/guest-amout-controller/ui/GuestAmountController";
import BookingDayRow from "../../../entities/booking-day-row/ui/BookingDayRow";
import BookingTimeRow from "../../../entities/time-tag-row/ui/BookingTimeRow";
import Button from "../../../shared/buttons/button/Button";
import {FiMap} from "react-icons/fi";
import {useEffect} from "react";
import BookingHeaderRow from "../../../entities/booking-header-row/ui/BookingHeaderRow";
import {useStore} from "../../../store/Store";

const BookingMenuScreen = () => {

    const getTimeSchedule = useStore((state) => state.getTimeSchedule)

    useEffect(() => {
        getTimeSchedule()
    }, []);

    return (
        <div className={style.wrapper}>

            <BookingHeaderRow/>
            <GuestAmountController/>
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

export default BookingMenuScreen