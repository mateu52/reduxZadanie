import React, { Component }  from 'react';
import { connect } from 'react-redux';
import UsersList from './UsersList';
import { fetchPosts } from '../redux';
import { fetchPostReset } from '../redux';

class Users extends Component{
    fetchPosts = () => {
        this.props.fetchPosts();
    };
    fetchPostReset = () => {
        this.props.fetchPostReset();
    };
    render(){
    const { posts, isLoading } = this.props;
    return(
        <div>
            <h2>Users</h2>
            {isLoading && <p>Loading...</p>}
            <button onClick={this.fetchPosts}>Fetch users</button>
            <button onClick={this.fetchPostReset}>Reset list</button>
            <UsersList posts={posts} />
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        {post.title}
                    </div>)
            })}
        </div>
    )}
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
  isLoading: state.posts.isLoading,
  isError: state.posts.isError
})
const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPostReset: () => dispatch(fetchPostReset())
})
export default connect(mapStateToProps, mapDispatchToProps)(Users);