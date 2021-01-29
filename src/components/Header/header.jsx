import React from 'react';
import classes from './header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.wrapLinks}>
                <a href="#" className={`${classes.item} ${classes.active}`}>crap</a>
                <a href="#" className={classes.item}>shit</a>
                <a href="#" className={classes.item}>schaise</a>
                <a href="#" className={classes.item}>gavno</a>

            </div>
        </div>
    );
}

export default Header;