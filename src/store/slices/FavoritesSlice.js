import {api} from "../../api/api";

export const favoritesSlice = (set, get) => ({

    favorites: [],

    addToFavorites: async (establishmentId) => {
        return api.post('/user/favourite', null,{
            params : {
                establishmentId : establishmentId
            }
        })
            .then((response) => {
                console.log(response)
                return response.status
            })
            .catch((error) => console.log(error))
    },

    removeFromFavorites: async (establishmentId) => {
        return api.put('/user/favourite', null, {
            params : {
                establishmentId: establishmentId
            }
        })
            .then((response) => {
                console.log(response)
                return response.status
            })
            .catch((error) => console.log(error))
    },

    getFavorites: async () => {
        api.get('/user/favourite')
            .then((response) => {
                console.log(response)
                set({favorites: response.data.result})
            })
            .catch((error) => console.log(error))
    }

})