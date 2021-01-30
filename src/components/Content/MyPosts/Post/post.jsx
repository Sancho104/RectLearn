import React from 'react';
import classes from './post.module.css';


const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img src="https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$" alt=""/>
            </div>

            <div className={classes.postText}>
                    {props.message}
            </div>
        </div>
    );
}

export default Post;