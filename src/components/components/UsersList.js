import React from "react";


function UsersList({ users }) {
    return (
    <div><p>Users:</p>
            {/* {users.map(user => {
                return (
                    <div key={user.login.uuid}>
                        {user.name.first}
                    </div>)
            })} */}
    </div>
    );
}

export default UsersList;