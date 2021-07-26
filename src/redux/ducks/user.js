// constants
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";

// actions
export const getUser = () => ({
    type: GET_USER,
});

export const setUser = (user) => ({
    type: SET_USER,
    user
});

// inital state
const initialState = ({
    user: undefined
});

// reducers
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            const { user } = action;
            return { ...state, user };
        default:
            return state;
    }
}