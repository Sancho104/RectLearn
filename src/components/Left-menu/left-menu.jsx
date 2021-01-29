import React from 'react';
import classes from './left-menu.module.css'

const Menu = () => {
    return (
        <div className={classes.menu}>
            <ul className={classes.listMenu}>
                <li className={classes.item}>Item</li>
                <li className={classes.item}>User</li>
                <li className={classes.item}>Search</li>
                <li>Anything</li>
                <li>Login</li>
            </ul>
        </div>
    );
}

export default Menu;