
export const useSSE = () => {

    const baseURL = "https://www.budle.ru"

    if (localStorage.getItem("isAuthorized") === "true") {

        const sse = new EventSource(`${baseURL}/user/notification/sse`, {
            withCredentials: true
        })

        return sse

    }

    return undefined

}

