import style from "./BookingHeaderRow.module.css"
import TextM from "../../../shared/text/text-m/TextM";
import CloseButton from "../../../shared/buttons/close-button/CloseButton";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";

const BookingHeaderRow = ({header}) => {

    const routeNavigator = useRouteNavigator()

    return (
        <div className={style.wrapper}>
            <TextM text={header} color={"#B6C1CE"}/>
            <CloseButton onClick={() => routeNavigator.back()} bgColor={"#EEF5F9"} />
        </div>
    )
}

export default BookingHeaderRow