import axios from "axios";
import {api} from "../../api/api";
import Cookies from "js-cookie";

export const establishmentListSlice = (set, get) => ({

    establishments: [],
    searchEstablishments: [],

    getAllEstablishments: async () => {
        await api.get("/establishment/all")
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