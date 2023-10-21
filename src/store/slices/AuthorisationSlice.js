import bridge from "@vkontakte/vk-bridge";
import axios from "axios";

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

        const response = await axios.post("https://80.89.192.250:8080/user/register", {
            password: get().password,
            username: get().nickname,
            phoneNumber: get().phoneNumber
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        console.log(response)

    },

    loginUser: async () => {

        const response = await axios.post("https://80.89.192.250:8080/user/login", {
            username: get().nickname,
            password: get().password
        },{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Vary' : 'Access-Control-Request-Methods',
                'Access-Control-Allow-Origin': '*',
                'Host': '80.89.192.250:8080'
            }
        })

        console.log(response)

    }

})