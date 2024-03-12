import Axios from "./instance";

export const Get = (url, body) => {
    try {
        const { data } = Axios.get(url, body ? { params: body } : {});
        return data;
    } catch (error) {
        console.log(error);
    }
}