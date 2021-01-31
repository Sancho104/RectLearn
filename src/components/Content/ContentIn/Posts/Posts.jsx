import React from 'react';
import NewPost from './myPosts/newPost/NewPost';
import Post from './myPosts/Post/Post';
import classes from './Posts.module.css'



const Posts = (props) => {
    let postsData = [
        { id: 1, message: 'Crap!!!!!!!', likesCount: 10, src: 'https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$'},
        { id: 2, message: 'Shit!!!!!!!', likesCount: 5, src: 'https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$'},
        { id: 3, message: 'Lol!!!!!!!', likesCount: 50, src: 'https://s7g3.scene7.com/is/image/soloinvest/n11346A?$big_image_web$'},
    ];

    let posts = postsData.map((item) => {
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