import React from 'react';
import classes from './Messages.module.css';
import Message from './Message/Message'
import NewMessage from './NewMessage/NewMessage';


const Messages = (props) => {
    // debugger;
    let messages = props.dialogsPage.messageData.map(el => <Message message={el.message} />);

    return (
        <div>
            <div className={classes.wrapMessage}>
                {messages}
            </div>
            <div className={classes.newVessage}>
                <NewMessage />
            </div>
        </div>

    );
}


export default Messages;