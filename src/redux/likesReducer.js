
import { DECREMENT, INCREMENT } from './types';
const initialState = {
    likes: 0
}

export const likesReducer = (state = initialState, action) => {
    console.log('likesReducer >', action);

    switch (action.type) {
        case INCREMENT:
            return { ...state, likes: state.likes + 1 }
        case DECREMENT:
            if (state.likes >= 1) {
                return { ...state, likes: state.likes - 1 }
            }
            return state
        default:
            return state;
    }
}