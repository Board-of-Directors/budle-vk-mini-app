import {api} from "../../api/api";

export const userBookingSlice = (set, get) => ({

    statusTagList: [
        {id: 3, name: "Все"},
        {id: 0, name: "В ожидании"},
        {id: 1, name: "Принятые"},
        {id: 2, name: "Отклонённые"},
    ],

    orderList: [],
    selectedStatusTag: {id: 3, name: "Все"},

    selectStatusTag: (statusTag) => set(() => ({
        selectedStatusTag: statusTag
    })),

    getOrders: async (status) => {
        await api.get("/user/order", {
            params: {
                userId: 0,
                status: status === 3 ? null : status
            }
        }).then((response) => {
            set({orderList: response.data.result})
            console.log(response)
        })
            .catch((error) => console.log(error))
    },

    cancelOrder: async (orderId) => {
        await api.put("/user/order/cancel",null, {
            params: {
                orderId: orderId
            }
        }).then((response) => console.log(response))
            .catch((error) => console.log(error))
        await get().getOrders(get().selectedStatusTag.id)
    },

    confirmOrder : async (orderId) => {
        return api.put('/user/order/confirm', null, {
            params : {
                orderId : orderId
            }
        })
            .then(console.log)
            .catch(console.log)
    }

})