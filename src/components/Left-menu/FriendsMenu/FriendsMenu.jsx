import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './FriendMenuItem/FriendMenuItem';
import classes from './FriendsMenu.module.css';



const FriendsMenu = (props) => {

    let user = props.dialogsData.map(el => {
        if (el.id >= 4) return;
        return (
            <Friend id={el.id} name={el.name} />
        );
    });

    return (
        <div className={classes.friendWrap}>

            <div className={classes.friendHeadler}>
                Friends:
            </div>
            <div className={classes.friendsListWrap}>
                {user}
            </div>

        </div>
    );
}


export default FriendsMenu;