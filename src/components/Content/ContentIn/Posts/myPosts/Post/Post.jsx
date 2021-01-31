import React from 'react';
import classes from './Post.module.css';




const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img src={props.src} alt=""/>
            </div>

            <div className={classes.postText}>
                    {props.message}
            </div>
            <div className={classes.postLikes}>
                    You have {props.likesCount} likes
            </div>
        </div>
    );
}

export default Post;