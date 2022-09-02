

const COUNTER_LOAD = 'COUNTER_LOAD'
const COUNTER_RESET = 'COUNTER_RESET'
const COUNTER_ADD = 'COUNTER_ADD'
const LOAD_FILED = 'LOAD_FILED'
const LOAD_SUCCEDED = 'LOAD_SUCCEDED'
//actions
const INITIAL_STATE = {
    posts: [],
    isLoading: false,
    isError: false
}
const loadSucceded = users =>({type: LOAD_SUCCEDED, payload: users})

const add = user => ({type: COUNTER_ADD, user})

 export const reset = () => ({type: COUNTER_RESET})

const loadFailed = () =>({type: LOAD_FILED})

const load = () =>({type: COUNTER_LOAD})

export const fetchPosts = () => {
    return function(dispatch){
        dispatch(load())
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => dispatch(loadSucceded(data.slice(0, 3))))
        .catch(error => dispatch(loadFailed()));
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case COUNTER_LOAD:
                return {
                    ...state,
                    isLoading: true,
                    isError: false
                }
        case LOAD_SUCCEDED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                posts: action.payload
            }
        case COUNTER_RESET:
            return {
                posts: [],
                isLoading: false,
                isError: true
            }
        case COUNTER_ADD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                posts: [ ...state.users, action.payload ]
            }
        case LOAD_FILED:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        default:
            return state;
    }
}