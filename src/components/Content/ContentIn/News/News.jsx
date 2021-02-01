import React from 'react';
import classes from './News.module.css';
import New1 from './NewsList/New1/New1';



const News = (props) => {


    let news = props.newsData.map(el => <New1 src={el.src} text={el.text}/>)

    return (
        <div className={classes.newsWrap}>
            {news}
        </div>
    );

}

export default News;