import React from 'react'
import Conversation from '../Conversation/Conversation'

const ConversationsContainer = ({ conversations, chat, setChat }) => {
  return (
    <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
        <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>
        <div className="card">
            <div className="card-body">
                <ul className="list-unstyled mb-0">
                    {conversations.map((conversation, idx) => {
                        return <Conversation key={idx} conversation={conversation} id={idx} chat={chat} setChat={setChat}/>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ConversationsContainer