import React from 'react'

const Conversation = ({ conversation, id, chat, setChat }) => {


  return (
    <li className="p-2 border-bottom" onClick={() => setChat(id)} style={ chat === id ? {backgroundColor: "#eee"} : {backgroundColor: 'white'}}>
        <div className="d-flex justify-content-between">
        <div className="d-flex flex-row">
            <img src={conversation.senderPic} alt="avatar"
            className="rounded d-flex align-self-center me-3 shadow-1-strong" width="60" />
            <div className="pt-1">
            <p className="fw-bold mb-0">{conversation.sender}</p>
            <p className="small text-muted">{conversation.lastSentMessage}</p>
            </div>
        </div>
        <div className="pt-1">
            <p className="small text-muted mb-1">{conversation.sentAt}</p>
            {conversation.notificationCounter ?
                <span className="badge bg-danger float-end">{conversation.notificationCounter}</span>
                :
                <></>
            }
        </div>
        </div>
    </li>
  )
}

export default Conversation