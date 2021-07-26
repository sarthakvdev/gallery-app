import Axios from "axios";

export const requestGetUser = () => {
    return Axios.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"
    });
}