import React from 'react';
import classes from './content.module.css';
import Post from './MyPosts/Post/post';
import Posts from './MyPosts/posts';

const Content = () => {
    return (
        <div className={classes.content}>
            <Posts />
        </div>
    );
}

export default Content;