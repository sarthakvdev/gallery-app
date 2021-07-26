/* eslint-disable import/no-anonymous-default-export */
// constants
export const GET_GALLERY = "GET_GALLERY";
export const SET_GALLERY = "SET_GALLERY";

// actions
export const getGallery = (albumId) => ({
    type: GET_GALLERY,
    albumId
});

export const setGallery = (gallery) => ({
    type: SET_GALLERY,
    gallery
});

// initial state
export const initialState = ({
    gallery: undefined,
});

// reducers
export default (state = initialState, action) => {
    switch(action.type){
        case GET_GALLERY:
            const { albumId } = action;
            return { ...state, albumId };
        case SET_GALLERY:
            const { gallery } = action;
            return { ...state, gallery };
        default:
            return state;
    };
}
