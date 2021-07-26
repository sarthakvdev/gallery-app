import Axios from "axios";

export const requestGetGallery = async (albumId) => {
    return Axios.request({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`,
    });
}