import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import Message from './Messages/Message/Message';
import DialogItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';



const Dialogs = (props) => {
// debugger;
    let dialogs = props.dialogsPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id} photo={el.photo}/>);
    // let messages = props.dialogsPage.messageData.map(el => <Message message={el.message} />);

    return (
        <div className={classes.wrap}>

            <div className={classes.wrapDialogs}>

                {dialogs}

            </div>

            {/* <div className={classes.wrapMessage}>
                {messages}
            </div> */}
            <Messages  dialogsPage={props.dialogsPage} />
            
        </div>
    );
}

export default Dialogs;