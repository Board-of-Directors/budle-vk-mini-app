import {api} from "../../api/api";
import Cookies from 'js-cookie';

export const establishmentBookingMenuSlice = (set, get) => ({

    response: false,
    guestAmount: 0,
    dayTagList: [],
    selectedDayTag: {dayName: "", monthName: "", dayNumber: "", times: []},
    selectedTime: {id: 0, name: ""},

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

        const order = {
            guestCount: get().guestAmount,
            date: `2023-10-${get().selectedDayTag.dayNumber}`,
            time: get().selectedTime.name,
            establishmentId: get().establishment.id
        }

        const response = await api.post("/order", order)
        console.log(response)

    }

})