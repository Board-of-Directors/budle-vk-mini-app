import {api} from "../../api/api";

export const establishmentListSlice = (set, get) => ({

    establishments: [],
    searchEstablishments: [],

    getAllEstablishments: async () => {
        await api.get("/user/establishments/all")
            .then((data) => set({establishments: data.data.result.establishments}))
            .catch((error) => console.log(error))
    },

    filterEstablishments: (name) => {
        const filteredEstablishments = get().establishments.filter(
            (establishment) => establishment.name.includes(name)
        )
        set({searchEstablishments: filteredEstablishments})
    }

})