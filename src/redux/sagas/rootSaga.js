import { takeLatest } from "@redux-saga/core/effects";
// constants
import { GET_USER } from "../ducks/user";
import { GET_ALBUM } from "../ducks/album";
import { GET_GALLERY } from "../ducks/gallery";
// handlers
import { handleGetUser } from "./handlers/users";
import { handleGetAlbum } from "./handlers/albums";
import { handleGetGallery } from "./handlers/gallery";

// If it's a generator function, there will be a yield
export function* watcherSaga() {
    yield takeLatest(GET_USER, handleGetUser);
    yield takeLatest(GET_ALBUM, handleGetAlbum);
    yield takeLatest(GET_GALLERY, handleGetGallery);
}