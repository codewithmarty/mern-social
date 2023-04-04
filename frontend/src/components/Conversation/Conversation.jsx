import React from 'react'

const Conversation = ({ user, conversation, chat, setChat }) => {
  return (
    <>

    { conversation.firstUser._id === user._id ? 
    
      <li className="p-2 border-bottom" onClick={() => { console.log(conversation._id, "conversation id clicking"); setChat(conversation._id); console.log(chat, "clicking") }} style={ chat === conversation._id ? {backgroundColor: "#eee"} : {backgroundColor: 'white'}}>
          <div className="d-flex justify-content-between">
          <div className="d-flex flex-row">
              <img src={conversation.secondUser.pic} alt="avatar"
              className="rounded d-flex align-self-center me-3 shadow-1-strong" width="60" />
              <div className="pt-1">
              <p className="fw-bold mb-0">{conversation.secondUser.firstName} {conversation.secondUser.lastName}</p>
              <p className="small text-muted">{conversation.lastSentMessage}</p>
              </div>
          </div>
          </div>
      </li>

      :

      <li className="p-2 border-bottom" onClick={() => { console.log(conversation._id, "conversation id clicking"); setChat(conversation._id) ; console.log(chat, "clicking") } } style={ chat === conversation._id ? {backgroundColor: "#eee"} : {backgroundColor: 'white'}}>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row">
              <img src={conversation.firstUser.pic} alt="avatar"
              className="rounded d-flex align-self-center me-3 shadow-1-strong" width="60" />
              <div className="pt-1">
              <p className="fw-bold mb-0">{conversation.firstUser.firstName} {conversation.firstUser.lastName}</p>
              <p className="small text-muted">{conversation.lastSentMessage}</p>
              </div>
          </div>
        </div>
      </li>

    }

    </>
  )
}

export default Conversation