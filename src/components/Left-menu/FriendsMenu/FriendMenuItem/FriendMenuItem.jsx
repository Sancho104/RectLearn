import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FriendMenuItem.module.css';


const Friend = (props) => {

    return (
        <div className={classes.friendItem}>
            <NavLink to={'/friends/' + props.id}>
                {props.name}
            </NavLink>
        </div>
    );
}


export default Friend;