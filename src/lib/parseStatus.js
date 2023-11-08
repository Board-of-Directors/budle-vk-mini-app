
export const parseStatus = (status) => {
    switch (status) {
        case 0: return {
            name: "В ожидании",
            color: "#654DF6"
        }
        case 1: return  {
            name: "Принят администратором",
            color: "#0ACF1E"
        }
        default: return {
            name: "Отклонён",
            color: "#FF406E"
        }
    }
}