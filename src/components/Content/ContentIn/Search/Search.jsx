import React from 'react';
import classes from './Search.module.css'


const Search = () => {
    return (
        <div className={classes.searchWrap}>
            <div className={classes.inputHeadler}>
                It`s are for a search
            </div>
            <input type="text"/>
            <input type="button" value='Search'/>
        </div>
    );

}

export default Search;