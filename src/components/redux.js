export const fetchUsers = (usersCount = 10) => {
    return fetch(`https://randomuser.me/api/?results=${usersCount}`)
    .then((response) => response.json());
};

const COUNTER_LOAD = 'COUNTER_LOAD'
const COUNTER_RESET = 'COUNTER_RESET'
const COUNTER_ADD = 'COUNTER_ADD'
const LOAD_FILED = 'LOAD_FILED'
const LOAD_SUCCEDED = 'LOAD_SUCCEDED'
//actions
const INITIAL_STATE = {
    users: [],
    isLoading: false,
    isError: false
}
const loadSucceded = users =>({type: LOAD_SUCCEDED, payload: users})

const add = user => ({type: COUNTER_ADD, user})

 export const reset = () => ({type: COUNTER_RESET})

const loadFailed = () =>({type: LOAD_FILED})

const load = () =>({type: COUNTER_LOAD})

// export const fetchPosts = () => {
//     return function(dispatch){
//         dispatch(load())
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .then(data => dispatch(loadSucceded(data.slice(0, 3))))
//         .catch(error => dispatch(loadFailed()));
//     }
// }

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
                users: action.payload
            }
        case COUNTER_RESET:
            return {
                users: [],
                isLoading: false,
                isError: true
            }
        case COUNTER_ADD:
            return {
                ...state,
                isLoading: false,
                isError: false,
                users: [ ...state.users, action.payload ]
            }
        case LOAD_FILED:
            return {
                ...state,
                isLoading: true,
                isError: true
            }
        default:
            return state;
    }
}

export const getUsers = () => (dispatch) => {
    dispatch(load());
    fetchUsers()
        .then((result) => { 
            dispatch(loadSucceded(result.results))
        })
        .catch((e) => {
            dispatch(loadFailed)
        })
}
export const resetUsers = () => (dispatch) => {
    dispatch(reset());
}

export const getOneUser = () => (dispatch) => {
    dispatch(load());
    fetchUsers(1)
        .then((result) => {
            dispatch(add(result.results));
        })
        .catch((e) => {
            dispatch(loadFailed());
        })
}

export const selectUsers = (state) => state.users.users || []