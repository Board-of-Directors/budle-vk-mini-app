
export const notificationSlice = (set, get) => ({

    notificaitons : [],

    addNewNotification : (message) => set({
        notificaitons: [...get().notificaitons, message]
    }),

    deleteNotification : (message) => set({
        notificaitons: get().notifications.filter(item => item !== message)
    })

})