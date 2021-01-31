import React from 'react';
import classes from './New1.module.css';



const New1 = (props) => {
    return (
        <div className={classes.new1Wrap}>
            <div className={classes.imgWrap}>
                <img src={props.src} alt=""/>
            </div>
            <div className={classes.textWrap}>
                {props.text}
            </div>
            
        </div>
    );

}

export default New1;