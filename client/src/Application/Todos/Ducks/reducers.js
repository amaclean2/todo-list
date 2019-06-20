export const todos = (state = {}, action) => {
	switch(action.type) {
        case "REQUEST_TODOS" :
            return {
                ...state,
                isFetching: true,
                needsUpdate: false
            }
        case "RECEIVE_TODOS" :
            return {
                ...state,
                isFetching: false,
                needsUpdate: false,
                data: action.data
            }
        case "UPDATE_TODOS" :
            return {
                ...state,
                isFetching: false,
                needsUpdate: true
            }
        default :
            return state
    }
}

export const todo = (state = {}, action) => {
	switch(action.type) {
        case "REQUEST_TODO" :
            return {
                ...state,
                isFetching: true,
                needsUpdate: false,
            }
        case "RECEIVE_TODO" :
            return {
                ...state,
                isFetching: false,
                needsUpdate: false,
                data: action.data
            }
        case "UPDATE_TODO" :
            return {
                ...state,
                data: action.data
            }
        default :
            return state
    }
}