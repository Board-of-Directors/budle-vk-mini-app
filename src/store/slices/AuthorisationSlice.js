import bridge from "@vkontakte/vk-bridge";
import axios from "axios";
import {api} from "../../api/api";
import Cookies from "js-cookie";

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

    setPhoneNumber: (phoneNumber) => set(() => ({
        phoneNumber: phoneNumber
    })),

    setNickname: (nickname) => set(() => ({
        nickname: nickname
    })),

    setPassword: (password) => set(() => ({
        password: password
    })),

    registerUser: async () => {

        const response = await api.post("/user/register", {
            password: get().password,
            username: get().nickname,
            phoneNumber: get().phoneNumber
        })

        console.log(response)

    },

    loginUser: async () => {
        await api.post("/user/login", {
            username: get().nickname,
            password: get().password
        })
    }

})