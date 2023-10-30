import axios from "axios";

export const api = axios.create({
    withCredentials: true,
    baseURL: "https://budle.ru"
})