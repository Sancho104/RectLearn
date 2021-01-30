import React from 'react';
import classes from './User.module.css';

const User = () => {
    return (
        <div className={classes.userWrap}>
            <h2>John Pupkin</h2>
            <div>City: Poltava</div>
            <div>Country: Ukraine</div>
        </div>
    );
}

export default User;