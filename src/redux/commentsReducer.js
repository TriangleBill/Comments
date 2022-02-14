
import { COMMENT_CREATE, COMMENT_DELETE, COMMENT_UPDATE, COMMENTS_LOAD } from './types';

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_CREATE:
            return { ...state, comments: [...state.comments, action.payload] }
        case COMMENTS_LOAD:
            const commentsNew = action.data.map(res => {
                return {
                    text: res.name,
                    id: res.id
                }
            })
            return { ...state, comments: commentsNew}
        case COMMENT_UPDATE:
            const { payload } = action
            const { comments } = state
            const itemIndex = comments.findIndex(res => res.id === payload.id)

            const nextComments = [
                ...comments.slice(0, itemIndex),
                payload,
                ...comments.slice(itemIndex + 1)
            ]
            return { ...state, comments: nextComments }
        case COMMENT_DELETE:
            return (() => {
                const { payload } = action
                const { comments } = state
                const itemIndex = comments.findIndex(res => res.id === payload)

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ]
                return { ...state, comments: nextComments }

            })()
        default:
            return state;
    }
}