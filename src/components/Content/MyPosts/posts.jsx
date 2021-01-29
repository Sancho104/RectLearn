import React from 'react';
import classes from './posts.module.css';
import Post from './Post/post';

const Posts = () => {
    return (
        <div className={classes.wrapPosts}>
            <Post />
            <Post />
        </div>
    );
}

export default Posts;