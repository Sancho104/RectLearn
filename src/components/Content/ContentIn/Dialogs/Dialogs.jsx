import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';
import DialogItem from './DialogsItem/DialogsItem';



const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);
    let messages = props.messageData.map(el => <Message message={el.message} />)

    return (
        <div className={classes.wrap}>

            <div className={classes.wrapDialogs}>

                {dialogs}

            </div>

            <div className={classes.wrapMessage}>
                {messages}
            </div>


        </div>
    );
}

export default Dialogs;