import {create} from "zustand"
import axios from "axios";

export const useEstablishmentCardStore = create((set) => ({
    establishment: null,
    getEstablishment: async (establishmentId) => {
        const response = await axios.get(`https://80.89.192.250:8080/establishment`,
            {
                params: {
                    establishmentId: establishmentId
                }
            })
        set({establishment: response.data.result})
    }
}))