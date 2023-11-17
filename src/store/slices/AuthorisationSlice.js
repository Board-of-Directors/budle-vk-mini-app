import bridge from "@vkontakte/vk-bridge";
import {api} from "../../api/api";

export const authorisationSlice = (set, get) => ({

    phoneNumber: "",
    nickname: "",
    password: "",

    userDenied: false,

    getPhoneNumberFromVK: () => {
        bridge.send("VKWebAppGetPhoneNumber")
            .then((data) => set({
                phoneNumber: data.phone_number,
                userDenied: false
            }))
            .catch(() => set({userDenied: true}))
    },

    setPhoneNumber: (phoneNumber) => set({
        phoneNumber: phoneNumber
    }),

    setNickname: (nickname) => set({
        nickname: nickname
    }),

    setPassword: (password) => set({
        password: password
    }),

    registerUser: async () => {

        return api.post("/user/register", {
            password: get().password,
            username: get().nickname,
            phoneNumber: get().phoneNumber
        })
            .then((response) => response.data.exception !== null)
            .catch((error) => console.log(error))

    },

    loginUser: async () => {
        return api.post("/user/login", {
            username: get().nickname,
            password: get().password
        })
            .then((response) => {
                localStorage.setItem("isAuthorized", "true")
                return response.data.exception !== null
            })
            .catch((error) => console.log(error))
    },

    getUser: async () => {
        await api.get("/user/me")
            .then((response) => {
                const userInfo = response.data.result
                console.log(userInfo)
                set({phoneNumber: userInfo.phoneNumber})
            })
            .catch((error) => console.log(error))
    }

})