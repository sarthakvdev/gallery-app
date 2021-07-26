// constants
export const GET_ALBUM = "GET_ALBUM";
export const SET_ALBUM = "SET_ALBUM";

// actions
export const getAlbum = (userId) => ({
    type: GET_ALBUM,
    userId
});

export const setAlbum = (album) => ({
    type: SET_ALBUM,
    album,
});

// initial state
export const initialState = ({
    album: undefined,
    userId: undefined,
});

// reducers
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ALBUM:
            const { userId } = action;
            return { ...state, userId };

        case SET_ALBUM:
            const { album } = action;
            return { ...state, album };
            
        default:
            return state;
    }
}