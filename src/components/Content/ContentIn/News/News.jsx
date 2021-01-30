import React from 'react';
import classes from './News.module.css';
import New1 from './NewsList/New1/New1';



const News = () => {
    return (
        <div className={classes.newsWrap}>
            <New1 />
            <New1 />
            <New1 />
            <New1 />
            <New1 />
        </div>
    );

}

export default News;