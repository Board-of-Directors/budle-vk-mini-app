import {api} from "../../api/api";
import Cookies from 'js-cookie';

export const establishmentBookingMenuSlice = (set, get) => ({

    response: false,
    guestAmount: 0,
    dayTagList: [],
    selectedDayTag: {dayName: "", monthName: "", dayNumber: "", times: []},
    selectedTime: {id: 0, name: ""},

    bookingStatus: undefined,

    setBookingStatus: (status) => set({
        bookingStatus: status
    }),
    setGuestAmount: (number) => set(() => ({
        guestAmount: number
    })),
    selectDayTag: (tag) => set(() => ({
        selectedDayTag: tag
    })),
    selectTimeTag: (tag) => set(() => ({
        selectedTime: tag
    })),

    getTimeSchedule: async () => {
        const response = await api.get("/establishment/time", {
            params: {
                establishmentId: get().establishment.id
            }
        })
        set(() => ({
            dayTagList: response.data.result,
            selectedDayTag: response.data.result[0]
        }))
    },

    postOrder: async () => {

        const date = new Date()
        const currentDayNumber = date.getDay()
        const currentMonthNumber = date.getMonth() + 1

        const dayNumber = get().selectedDayTag.dayNumber
        const validDayNumber = dayNumber.length === 1 ? `0${dayNumber}` : dayNumber

        const validMonthNumber = currentDayNumber > parseInt(dayNumber)
            ? currentMonthNumber + 1 : currentMonthNumber

        const order = {
            guestCount: get().guestAmount,
            date: `2023-${validMonthNumber}-${validDayNumber}`,
            time: get().selectedTime.name,
            establishmentId: get().establishment.id
        }

        await api.post("/user/order/create", order)
            .then((response) => {
                const error = response.data.exception
                error === null ? get().setBookingStatus(true) : get().setBookingStatus(false)
            }).catch((error) => console.log(error))

    }

})