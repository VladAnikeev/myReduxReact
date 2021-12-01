import { INCREMENT, DECREMENT } from "./type";


const initialState = {
    likes: 0,
};

export const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                likes: ++state.likes,
            };
        case DECREMENT:
            return {
                ...state,
                likes: --state.likes,
            };
        default:
            return state
    };
};