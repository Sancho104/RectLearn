import React from 'react';
import classes from './NewPost.module.css';



const NewPost = (props) => {

    let addPost = () => {
        // debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let newPostElement = React.createRef();

    return (
        <div>
            <div className={classes.textNewPost}>
                Create new post:
            </div>
            <textarea ref={newPostElement} name="newPost" id="" cols="30" rows="4"></textarea>
            <button onClick={ addPost }>Add post</button>
        </div>
    );
}

export default NewPost;