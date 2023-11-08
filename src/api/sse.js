import bridge from "@vkontakte/vk-bridge";

export const useSSE = () => {

    const baseURL = "https://www.budle.ru"

    if (localStorage.getItem("isAuthorized") === "true") {

        const sse = new EventSource(`${baseURL}/user/notification/sse`, {
            withCredentials: true
        })

        sse.addEventListener("open", (e) => console.log("SSE_OPENED", e))

    }

}

