
import { COMMENT_CREATE, DECREMENT, INCREMENT, INPUT_TEXT, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, ERROR_DISPLAY_ON, ERROR_DISPLAY_OFF } from './types';

export function incrementLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}

export function changeInputText(text) {
    return {
        type: INPUT_TEXT,
        payload: text
    }
}

export function changeCommentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        payload: { text, id }
    }
}

export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        payload: { text, id }
    }
}

export function commentDelete(id) {
    return {
        type: COMMENT_DELETE,
        payload: id
    }
}

export function commentsLoad() {
    return async dispatch => {
        try {
            dispatch(onLoader())
            const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
            const json = await response.json()
            dispatch({
                type: COMMENTS_LOAD,
                data: json
            })
            dispatch(offLoader())
        } catch (err) {
            dispatch(offLoader())
            dispatch(onError('Ошибка API'))
        }

    }
}

export function onLoader() {
    return {
        type: LOADER_DISPLAY_ON
    }
}

export function offLoader() {
    return {
        type: LOADER_DISPLAY_OFF
    }
}

export function offError() {
    return {
        type: ERROR_DISPLAY_OFF
    }
}

export function onError(text) {
    return dispatch => {
        dispatch({
            type: ERROR_DISPLAY_ON,
            text
        })

        setTimeout(() => {
            dispatch(offError())
        }, 2000)
    }
}
