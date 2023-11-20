import {api} from "../../api/api";

export const establishmentCardInfoSlice = (set) => ({
    establishment: null,
    getEstablishment: async (establishmentId) => {
        const response = await api.get(`/establishment`,
            {
                params: {
                    establishmentId: establishmentId
                }
            })
        set({establishment: response.data.result})
    }
})