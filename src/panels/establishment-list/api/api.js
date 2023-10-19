import axios from "axios";

export const getEstablishments = async () => {
    try {
        const response = await axios.get("http://192.168.1.119:8080/establishment/all")
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
}