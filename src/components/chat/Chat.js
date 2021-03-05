import React, { useEffect, useState } from 'react'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'

import './Chat.css'
import ChatHeader from '../chatHeader.js/ChatHeader'
import Message from '../message/Message'


const Chat = () => {
    return (
        <div className = "chat">
            <div className = "chat__messages">
               
                <ChatHeader />

                <div className = "chat__messages">
                    <Message />
                </div>

            </div>
            <div className = "chat__input">
                <AddCircle />

                <form>
                    <input type="text" placeholder = {`message`} />
                    <button className = "chat__inputButton" type = "submit"> send</button>
                </form>
                <div className = "chat__inputIcons">
                    <CardGiftcard fontSize="large"/>
                    
                    <Gif fontSize = "large" />
                    
                    <EmojiEmotions fontSize = "large" />
            </div>
        </div>
    </div>
    )
}

export default Chat