import React from 'react';
import classes from './Dialogs.module.css';
// import Post from './MyPosts/Post/post';
import Posts from './MyPosts/posts';

const Dialogs = () => {
    return (
        <div className={classes.content}>
            <Posts />
        </div>
    );
}

export default Dialogs;