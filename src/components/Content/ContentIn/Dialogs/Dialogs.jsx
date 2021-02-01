import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';
import DialogItem from './DialogsItem/DialogsItem';



const Dialogs = (props) => {
// debugger;
    let dialogs = props.dialogsPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id} photo={el.photo}/>);
    let messages = props.dialogsPage.messageData.map(el => <Message message={el.message} />)

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