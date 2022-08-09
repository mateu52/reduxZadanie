import { combineReducers } from "redux";
import usersReducer from './components/redux';

const rootReducer = combineReducers({
    posts: usersReducer
})

export default rootReducer;