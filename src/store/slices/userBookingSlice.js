import {api} from "../../api/api";

export const userBookingSlice = (set, get) => ({

    statusTagList: [
        {id: 3, name: "Все"},
        {id: 0, name: "В ожидании"},
        {id: 1, name: "Принятые"},
        {id: 2, name: "Отклонённые"},
    ],

    orderList: [],

    getOrders: async (status) => {
        await api.get("/order", {
            params: {
                userId: 0,
                status: status === 3 ? null : status
            }
        }).then((response) => {
            set({orderList: response.data.result})
            console.log(response)
        })
            .catch((error) => console.log(error))
    }

})