import React from 'react';
import classes from './left-menu.module.css'

const Menu = () => {
    return (
        <div className={classes.menu}>
            <ul className={classes.listMenu}>
                <li className={classes.item}><a href="/news">News</a> </li>
                <li className={classes.item}><a href="user">User</a></li>
                <li className={classes.item}><a href="/search">Search</a></li>
                <li className={classes.item}><a href="/dialogs">dialogs</a></li>
                <li className={classes.item}><a href="/login">Login</a></li>
            </ul>
        </div>
    );
}

export default Menu;