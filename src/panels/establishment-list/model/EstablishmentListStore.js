import {create} from "zustand"
import axios from "axios";

export const useEstablishmentsStore = create((set) => ({
    establishments: [],
    getAllEstablishments : async () => {
        await axios.get("https://80.89.192.250:8080/establishment/all")
            .then((data) => set({establishments: data.data.result.establishments}))
            .catch((error) => console.log(error))
    }
}))