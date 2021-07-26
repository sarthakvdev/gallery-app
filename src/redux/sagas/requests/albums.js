import Axios from "axios";

export const requestGetAlbum = async (userId) => {
    return Axios.request({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/users/${userId}/albums`,
    });
}