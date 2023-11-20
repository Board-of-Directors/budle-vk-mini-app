import style from "./BookingMenuScreen.module.css"
import GuestAmountController from "../../../entities/guest-amout-controller/ui/GuestAmountController";
import BookingDayRow from "../../../entities/booking-day-row/ui/BookingDayRow";
import BookingTimeRow from "../../../entities/time-tag-row/ui/BookingTimeRow";
import Button from "../../../shared/buttons/button/Button";
import {FiMap} from "react-icons/fi";
import {useEffect} from "react";
import BookingHeaderRow from "../../../entities/booking-header-row/ui/BookingHeaderRow";
import {useStore} from "../../../store/Store";
import {useShallow} from "zustand/react/shallow";
import InformationScreen from "../../information-screen/InformationScreen";

import SuccessCacke from "../../../images/success-cake.png"
import FailureX from "../../../images/failure-x.png"
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import CenterContentScreen from "../../../shared/wrappers/center-content-screen/CenterContentScreen";

const BookingMenuScreen = () => {

    const routeNavigator = useRouteNavigator()

    const [getTimeSchedule, postOrder, bookingStatus, setBookingStatus] = useStore(
        useShallow((state) => [state.getTimeSchedule, state.postOrder,
            state.bookingStatus, state.setBookingStatus])
    )

    useEffect(() => {
        setBookingStatus(undefined)
        getTimeSchedule()
    }, []);

    return (
        <div>
            {
                bookingStatus === undefined ? <div className={style.wrapper}>

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
                            onClick={() => postOrder()}
                        />
                    </div>

                </div> : bookingStatus === true ?
                    <CenterContentScreen>
                        <InformationScreen
                            icon={SuccessCacke}
                            header={"Бронирование прошло успешно!"}
                            caption={"Статус брони можно посмотреть в разделе профиля «Мои брони»"}
                            buttonText={"На главный экран"}
                            onClick={() => routeNavigator.push("/establishment-list")}
                        />
                    </CenterContentScreen>

                    : <CenterContentScreen>
                        <InformationScreen
                            icon={FailureX}
                            header={"Ой! Бронирование неудалось"}
                            caption={"Проверьте корректность ваших данных и попробуйте снова"}
                            buttonText={"Попробовать снова"}
                            onClick={() => setBookingStatus(undefined)}
                        />
                    </CenterContentScreen>
            }
        </div>
    )
}

export default BookingMenuScreen