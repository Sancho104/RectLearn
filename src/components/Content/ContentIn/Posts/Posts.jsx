import React from 'react';
// import NewPost from './myPosts/newPost/NewPost';
import Post from './myPosts/Post/Post';
import classes from './Posts.module.css'



const Posts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
            // debugger;
        // let text = newPostElement.current.value;
        props.addPost();
        // props.updateNewPostText('');
    }
    
    let posts = props.postsPage.postsData.map((item) => {
        return <Post src={item.src} message={item.message} likesCount={item.likesCount} />
    });

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        
    }

    return (
        <div>
            {/* <NewPost addPost={props.addPost}/> */}
            <div className={classes.postsWrap}>
                { posts }
            </div>
            
            <textarea onChange={onPostChange} ref={newPostElement} 
            cols="30" rows="4" 
            value={props.newPostText}/>
            <button onClick={ addPost }>Add post</button>

        </div>
    );
}

export default Posts;