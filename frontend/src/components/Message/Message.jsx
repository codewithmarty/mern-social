import React from 'react'

const Message = ({ message, user }) => {
  return (
    <li className="d-flex justify-content-between mb-4">
        {message.sender !== user.name ?         
        <img src={message.senderPic} alt="avatar"
        className="rounded d-flex align-self-start me-3 shadow-1-strong" width="60" /> : <></>
        }
        <div className="card w-100">
          <div className="card-header d-flex justify-content-between p-3">
              <p className="fw-bold mb-0">{message.sender}</p>
              <p className="text-muted small mb-0"><i className="far fa-clock"></i>{message.sentAt}</p>
          </div>
          <div className="card-body">
              <p className="mb-0">
              {message.body}
              </p>
          </div>
        </div>
        {message.sender === user.name ?         
        <img src={message.senderPic} alt="avatar"
        className="rounded d-flex align-self-start m-3 shadow-1-strong" width="60" /> : <></>
        }
    </li>
  )
}

export default Message