import {create} from "zustand";
import axios from "axios";

export const useBookingMenuStore = create((set) => ({

    establishmentId: 0,
    guestAmount: 0,

    dayTagList: [],
    selectedDayTag: {
        dayName: "",
        monthName: "",
        dayNumber: "",
        times: []
    },

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

    getTimeSchedule: async (establishmentId) => {
        const response = await axios.get("https://80.89.192.250:8080/establishment/time", {
            params : {
                establishmentId: establishmentId
            }
        })
        set(() => ({
            dayTagList: response.data.result,
            selectedDayTag: response.data.result[0]
        }))
    }

}))