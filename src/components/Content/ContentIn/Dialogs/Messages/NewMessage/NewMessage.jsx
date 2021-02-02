import React from 'react';
import classes from './NewMessage.module.css'


const NewMessage = (props) => {

let addMessage = () => {
    let text = newMessageElement.current.value;
}
let newMessageElement = React.createRef();

    return (
        <div className={classes.message}>
            <div className={classes.createMessageHead}>

            </div>
            <div className={classes.messageText}>
                <textarea ref={newMessageElement} name="" id="" cols="30" rows="4"></textarea>
            </div>
            <button onClick={addMessage}>Add message</button>
        </div>
    );
}


export default NewMessage;