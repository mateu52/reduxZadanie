import React from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import { resetUsers, getUsers, getOneUser, selectUsers } from '../redux';
function Home({users, handleLoad, handleReset}) {
    // const handleLoad = () => {
    //     getUsers();
    // };
    // const handleReset = () => {
    //     resetUsers();
    // }
    // const handleAdd = () => {
    //     getOneUser();
    // };

    return(
        <div>
            <h3>Home Container</h3>
            <button onClick={handleLoad}>Load</button>
            <button onClick={handleReset}>Reset</button>
            {/* <button onClick={handleAdd}>Add</button> */}
            <div>
            <h2>Users</h2>
            <br></br>
            <UsersList users={users} />
        </div>
        </div>
    )
}
const mapStateToProps = state => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    isError: state.users.isError
})
const mapDispatchToProps = dispatch => ({
    handleLoad: () => dispatch(getUsers()),
    handleReset : () => dispatch(resetUsers())
})
// { resetUsers, getUsers, getOneUser}



export default connect(mapStateToProps, mapDispatchToProps)(Home);