/* handler: call the req function and store the data in redux store
   yield: like await, waits for the call to finished before we move on. */

import { call, put } from "@redux-saga/core/effects";
// action
import { setUser } from "../../ducks/user";
// get the data
import { requestGetUser } from "../requests/users";

export function* handleGetUser() {
    try {
        // taking user data from API
        const response = yield call(requestGetUser);
        const { data } = response;
        // setting it to state:user
        yield put(setUser(data));
    } catch(error) {
        console.log(error);
    }
}
