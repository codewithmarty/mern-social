import React, { useState, useEffect } from 'react'
import Chatbox from '../../components/Chatbox/Chatbox'
import ConversationsContainer from '../../components/ConversationsContainer/ConversationsContainer'
import { getFriendships, getMessages } from '../../utilities/users-api'

const Messenger = ({ user }) => {

    const [conversations, setConversations] = useState([])
    const [messages, setMessages] = useState([])
    const [chat, setChat] = useState(null)

    useEffect(() => {
        getFriendships().then(res => {
            setConversations(res)
        })
    }, [messages[messages.length-1]?.body])

    useEffect(() => {
        getFriendships().then(res => {
            setChat(res[0]._id)
        })
    }, [])

    useEffect(() => {
        if (chat) getMessages({ conversationId: chat }).then(res => {
            setMessages(res)
        })
    }, [chat])

  return (
    <section className="fade-in-image" style={{backgroundColor: "#eee"}}>
        <div className="container py-5">
            <div className="row">
                { chat && conversations && 
                <>
                    <ConversationsContainer user={user} chat={chat} setChat={setChat} conversations={conversations} />
                    <Chatbox messages={messages} setMessages={setMessages} chat={chat} user={user} conversations={conversations} setConversations={setConversations} />
                </>
                
                }
            </div>
        </div>
    </section>
  )
}

export default Messenger
