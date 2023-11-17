import style from "./NotificationCard.module.css"
import {useState} from "react";
import TextS from "../../shared/text/text-s/TextS";
import TextM from "../../shared/text/text-m/TextM";
import ChevronButton from "../../shared/buttons/chevron-button/ChevronButton";
import Button from "../../shared/buttons/button/Button";

const NotificationCard = ({notification, isNested = false}) => {

    const classname = isNested ? style.nestedWrapper : style.wrapper

    const establishment = notification.establishment
    const booking = establishment.booking

    const [isExpanded, setExpanded] = useState(false)

    const bookingInfoList = [
        {header: "Кол-во гостей", data: booking.guestAmount},
        {header: "Бронь на имя", data: booking.username}
    ]

    return (
        <div className={classname}>

            <div className={"w-full flex flex-col gap-[15px]"}>

                <div className={style.estNameTimeRow}>
                    <TextM text={establishment.name} />
                    <TextS text={booking.time} color={"#B6C1CE"}/>
                </div>

                {
                    isExpanded && <div className={style.bookingInfoCol}>
                        {
                            bookingInfoList.map((infoRow) => {
                                return <div className={style.infoRow}>
                                    <TextS text={infoRow.header} color={"#B6C1CE"} />
                                    <TextS text={infoRow.data} />
                                </div>
                            })
                        }
                    </div>
                }

            </div>

            <div className={style.divider}>
                <div className={"w-full h-[2px] bg-background-budle-light-blue"} />
                <ChevronButton
                    isExpanded={isExpanded}
                    onClick={() => setExpanded(!isExpanded)}
                />
                <div className={"w-full h-[2px] bg-background-budle-light-blue"} />
            </div>

            <div className={style.messageCol}>
                <TextM text={"Сообщение"} color={"#B6C1CE"} />
                <TextM text={notification.message} />
            </div>

            <div className={style.buttonRow}>
                <Button
                    text={"Подтвердить"}
                    onClick={() => console.log("ASSIGNED")}
                />
                <Button
                    text={"Отменить"}
                    onClick={() => console.log("REJECTED")}
                    bgColor={"#EEF5F9"}
                />
            </div>
        </div>
    );
};

export default NotificationCard
