import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// reducer
import userReducer from "./ducks/user";
import albumReducer from "./ducks/album";
import galleryReducer from "./ducks/gallery";
// saga
import { watcherSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({
    user: userReducer,
    album: albumReducer,
    gallery: galleryReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// create store
const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga);

export default store;
