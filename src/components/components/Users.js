import React, { useEffect, useState }  from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import { getUsers, selectUsers } from '../redux'

const Users = ({users, isLoading, getUsers}) => {
    const [ localLoading, setLocalLoading ] = useState(true);
    useEffect(() => {
        !users.length && getUsers();
        setLocalLoading(false);
    },[getUsers, users]);


    return(
        <div>
            <h2>Users</h2>
            {localLoading && <p>Loading...</p>}
            <br></br>
            <UsersList users={users} />
        </div>
    )
}

const mapStateToProps = state => ({
    users: selectUsers(state),
    posts: state.users.posts,
  isLoading: state.users.isLoading,
  isError: state.users.isError
})
const mapDispatchToProps = { getUsers };
export default connect(mapStateToProps, mapDispatchToProps)(Users);