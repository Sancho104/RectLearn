import React from 'react';
import NewPost from './myPosts/newPost/NewPost';
import Post from './myPosts/Post/Post';
import classes from './Posts.module.css'



const Posts = (props) => {


    let posts = props.postsData.map((item) => {
        return <Post src={item.src} message={item.message} likesCount={item.likesCount}/>
    });

    return (
        <div>
            <NewPost />
            <div className={classes.postsWrap}>
                { posts }
            </div>
        </div>
    );
}

export default Posts;