import React from 'react';
import classes from './News.module.css';
import New1 from './NewsList/New1/New1';



const News = () => {
    let newsData = [
        {id: 1, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a bich'},
        {id: 2, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a not bich'},
        {id: 3, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a bich'},
        {id: 4, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a bich'},
        {id: 5, src :'https://miro.medium.com/max/13440/1*NtrIiZxvi2d0Yoh_389Z_A.jpeg', text :'It`s a bich'},
    ];

    let news = newsData.map(el => <New1 src={el.src} text={el.text}/>)

    return (
        <div className={classes.newsWrap}>
            {news}
        </div>
    );

}

export default News;