import { call, put } from "@redux-saga/core/effects";
import { setGallery } from "../../ducks/gallery";
import { requestGetGallery } from "../requests/gallery";

export function* handleGetGallery(action) {
    try {
        const gallery = yield call(requestGetGallery, action.albumId);
        const { data } = gallery;
        yield put(setGallery(data));
    } catch(error) {
        console.log(error);
    }
}