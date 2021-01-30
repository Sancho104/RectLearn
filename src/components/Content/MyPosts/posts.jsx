import React from 'react';
import classes from './posts.module.css';
import Post from './Post/post';

const Posts = () => {
    return (
        <div className={classes.wrapPosts}>
            <Post message="It's amazing"/>
            <Post message="It's anbiliveble"/>
        </div>
    );
}

export default Posts;