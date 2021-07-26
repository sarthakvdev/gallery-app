import { call, put } from "@redux-saga/core/effects";
import { setAlbum } from "../../ducks/album";
import { requestGetAlbum } from "../requests/albums";

export function* handleGetAlbum(action) {
    try {
        const album = yield call(requestGetAlbum, action.userId);
        const { data } = album;
        yield put(setAlbum(data));
    } catch(error) {
        console.log(error);
    }
}