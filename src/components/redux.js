

const FETCH_POST_REQUESTED = 'FETCH_POST_REQUESTED'
const FETCH_POST_SUCCEDED = 'FETCH_POST_SUCCEDED'
const FETCH_POST_FAILED = 'FETCH_POST_FAILED'
const FETCH_POST_RESET = 'FETCH_POST_RESET'
//actions
const INITIAL_STATE = {
    posts: [],
    isLoading: false,
    isError: false
}
const fetchRequested = () => ({ type: FETCH_POST_REQUESTED});
const fetchFailed = () => ({ type : FETCH_POST_FAILED});
const fetchSucceded = data => ({ type: FETCH_POST_SUCCEDED, payload: data });
export const fetchPostReset = () => ({ type: FETCH_POST_RESET });
export const fetchPosts = () => {
    return function(dispatch){
        dispatch(fetchRequested())
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => dispatch(fetchSucceded(data.slice(0, 3))))
        .catch(error => dispatch(fetchFailed()));
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POST_REQUESTED:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_POST_SUCCEDED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                posts: action.payload
            }
        case FETCH_POST_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case FETCH_POST_RESET:
            return {
                ...state,
                isLoading: true,
                isError: false,
                posts: []
            }
        default:
            return state;
    }
}