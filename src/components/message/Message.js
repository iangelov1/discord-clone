import React from 'react'
import './Message.css'

const Message = () => {
    return (
        <div className = "message">
            <div className ='message__info'>
                <h4>
                    UserName
                    <span className = "message__timestamp">
                    </span>
                </h4>
                    <p>message</p>
            </div>
        </div>
    )
}

export default Message