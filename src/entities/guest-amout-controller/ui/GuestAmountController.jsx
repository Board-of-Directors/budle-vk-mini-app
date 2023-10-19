import style from "./GuestAmountController.module.css"
import HeaderContentCol from "../../../shared/wrappers/header-content-col/HeaderContentCol";
import AmountButton from "../../../shared/buttons/amount-button/AmountButton";
import {useBookingMenuStore} from "../../../panels/booking-menu/api/BookingMenuStore";
import {useShallow} from "zustand/react/shallow";
import Text3XL from "../../../shared/text/text-3xl/Text3XL";

const GuestAmountController = () => {

    const [guestAmount, setGuestAmount] = useBookingMenuStore(
        useShallow((state) => {
            return [state.guestAmount, state.setGuestAmount]
        })
    )

    return (
        <HeaderContentCol header={"Количество гостей"}>
            <div className={style.row}>
                <AmountButton
                    icon={"plus"}
                    onClick={() => {
                        guestAmount > 1 ? setGuestAmount(guestAmount - 1) : null
                    }}/>
                <Text3XL text={guestAmount} />
                <AmountButton
                    icon={"minus"}
                    onClick={() => {
                        guestAmount < 20 ? setGuestAmount(guestAmount + 1) : null
                    }}/>
            </div>
        </HeaderContentCol>
    )
}

export default GuestAmountController