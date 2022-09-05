import { combineReducers } from "redux";
import usersReducer from './components/redux';

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;