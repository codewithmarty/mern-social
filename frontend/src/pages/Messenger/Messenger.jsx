import React, { useState, useEffect } from 'react'
import Chatbox from '../../components/Chatbox/Chatbox'
import ConversationsContainer from '../../components/ConversationsContainer/ConversationsContainer'

const Messenger = ({ user }) => {

    const [chat, setChat] = useState(0)
    const [conversations, setConversations] = useState([
        {
            sender: 'John Doe',
            senderPic: 'https://media.istockphoto.com/id/1134698162/photo/successful-teacher.jpg?s=612x612&w=0&k=20&c=6QxvrMitNZNEaSrWKH7CdckkIk8Z2Qkxpxq7zw1oRBc=',
            lastSentMessage: 'Hello, Are you there?',
            sentAt: 'Just now',
            notificationCounter: 1
        },
        {
            sender: 'Ashley Olsen',
            senderPic: 'https://media.istockphoto.com/id/1210513797/photo/tv-reporter-at-the-airport.jpg?s=612x612&w=0&k=20&c=VgjIKuXd428Mi6QdNXMFcLVBSjbtXYBJ0j6tOC_Mwxo=',
            lastSentMessage: 'Hey, have you seen Full House?',
            sentAt: '10 minutes ago',
            notificationCounter: 0
        },
    ])
    const [messages, setMessages] = useState([
        {
            sender: 'John Doe',
            senderPic: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp',
            body: 'Hello, Are you there?',
            sentAt: 'Just now'
        }
    ])

    useEffect(() => {
        setMessages([
            {
                sender: conversations[chat].sender,
                senderPic: conversations[chat].senderPic,
                body: conversations[chat].lastSentMessage,
                sentAt: conversations[chat].sentAt
            }
        ])
    }, [chat])

  return (
    <section className="fade-in-image" style={{backgroundColor: "#eee", height: '100vh'}}>
        <div className="container py-5">
            <div className="row">
                <ConversationsContainer chat={chat} setChat={setChat} conversations={conversations} />
                <Chatbox messages={messages} setMessages={setMessages} user={user} />
            </div>
        </div>
    </section>
  )
}

export default Messenger
