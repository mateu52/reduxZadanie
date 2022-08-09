import React from "react";


function UsersList({ posts }) {
    return (
    <div><p>Users:</p>
            {posts.map(post => (
        <h3 key={post.id}>
            {post.id} {post.title}
        </h3>
        ))}
    </div>
    );
}

export default UsersList;