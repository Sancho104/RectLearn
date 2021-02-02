import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink className={classes.dialogItem} to={'/dialogs/' + props.id}>
                <div className={classes.photoWrap}>
                    <img src={props.photo} alt="" />
                </div>
                <div className={classes.nameText}>
                    {props.name}
                </div>


            </NavLink>
        </div>
    );
}


export default DialogItem;