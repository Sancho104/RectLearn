import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import Message from './Messages/Message';
import DialogItem from './DialogsItem/DialogsItem'; 



const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Vasiliy' },
        { id: 2, name: 'Hryn`' },
        { id: 3, name: 'Sulimka' },
        { id: 4, name: 'Anatolivna' }
    ];
    let messageData = [
        { id: 1, message: 'Hi, idiot!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Are you fine?' },
        { id: 4, message: 'Shut up, bitch!' }
    ];

    let dialogs = dialogsData.map( el => <DialogItem name={el.name} id={el.id} />);
    let messages = messageData.map( el => <Message message={el.message}/>)

    return (
        <div className={classes.wrap}>

            <div className={classes.wrapDialogs}>
                
                { dialogs }

            </div>

            <div className={classes.wrapMessage}>
                { messages }
            </div>


        </div>
    );
}

export default Dialogs;