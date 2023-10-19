import style from "./BookingHeaderRow.module.css"
import TextM from "../../../shared/text/text-m/TextM";
import CloseButton from "../../../shared/buttons/close-button/CloseButton";
import {useRouteNavigator} from "@vkontakte/vk-mini-apps-router";
import {useStore} from "../../../store/Store";

const BookingHeaderRow = () => {

    const routeNavigator = useRouteNavigator()
    const establishment = useStore((state) => state.establishment)

    return (
        <div className={style.wrapper}>
            <TextM text={establishment.name} color={"#B6C1CE"}/>
            <CloseButton onClick={() => routeNavigator.back()} bgColor={"#EEF5F9"} />
        </div>
    )
}

export default BookingHeaderRow