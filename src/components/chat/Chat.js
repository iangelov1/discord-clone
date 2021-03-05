import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import firebase from 'firebase'

import './Chat.css'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'

import ChatHeader from '../chatHeader/ChatHeader'
import Message from '../message/Message'

import { selectChannelId, selectChannelName } from '../../features/appSlice'
import { selectUser } from '../../features/userSlice'
import db from '../../firebase'

const Chat = () => {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        if (channelId){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            )
        }
    }, [channelId])

    const sendMessage = (e) => {
        e.preventDefault()

        db.collection('channels').doc(channelId).collection('messages').add({
            user: user,
            messsage: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }

    return (
        <div className = "chat">
            <ChatHeader channelName = {channelName} />

            <div className = "chat__messages">
                {messages.map((message) => (
                    <Message 
                        timestamp = {message.timestamp}
                        message = {message.messsage}
                        user = {message.user}
                    />
                ))}
            </div>

            <div className = "chat__input">
                <AddCircle />

                <form>
                    <input 
                        value = {input}
                        onChange = {(e) => setInput(e.target.value)}
                        placeholder = {`message #${channelName}`}
                    />

                    <button className="chat__inputButton" type="submit" onClick={sendMessage} disabled={!channelId}> Send </button>
                </form>

                <div className = "chat__inputIcons">
                    <CardGiftcard fontSize="large" />

                    <Gif fontSize="large" />

                    <EmojiEmotions fontSize="large" />
            </div>
        </div>
    </div>
    )
}

export default Chat