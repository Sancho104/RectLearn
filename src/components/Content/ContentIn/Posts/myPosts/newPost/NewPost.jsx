import React from 'react';
import classes from './NewPost.module.css';



const NewPost = (props) => {
    return (
        <div>
            <div className={classes.textNewPost}>
                Create new post:
            </div>
            <textarea name="newPost" id="" cols="30" rows="4"></textarea>
            <button>Add post</button>
        </div>
    );
}

export default NewPost;