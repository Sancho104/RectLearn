import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './left-menu.module.css'

const Menu = () => {
    return (
        <div className={classes.menu}>
            <ul className={classes.listMenu}>
                <li className={classes.item}><NavLink to="/posts" activeClassName={classes.activeLink}>Posts</NavLink> </li>
                <li className={classes.item}><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink> </li>
                <li className={classes.item}><NavLink to="user" activeClassName={classes.activeLink}>User</NavLink></li>
                <li className={classes.item}><NavLink to="/search" activeClassName={classes.activeLink}>Search</NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.activeLink}>dialogs</NavLink></li>
                <li className={classes.item}><NavLink to="/login" activeClassName={classes.activeLink}>Login</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu;