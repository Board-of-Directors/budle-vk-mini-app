import axios from "axios";

export const establishmentListSlice = (set, get) => ({

    establishments: [],
    searchEstablishments: [],

    getAllEstablishments: async () => {
        await axios.get("https://80.89.192.250:8080/establishment/all")
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