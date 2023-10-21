import axios from "axios";

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
        const response = await axios.get("https://80.89.192.250:8080/establishment/time", {
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
            date: `23-10-${get().selectedDayTag.dayNumber}`,
            time: {
                hour: get().selectedTime.substring(0,2),
                minute: get().selectedTime.substring(3,5),
                second: 0,
                nano: 0
            },
            establishmentId: get().establishment.id,
            userId: 1,
            spotId: 1
        }

        const response = await axios.post("https://80.89.192.250:8080/order", order)
        set({orderStatus: response.status === 200 ? true : false})

    }

})