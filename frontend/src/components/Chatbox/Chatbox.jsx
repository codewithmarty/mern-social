import React, { useState } from 'react'
import Message from '../Message/Message'

const Chatbox = ({ messages, setMessages, user }) => {

  const [newMessage, setNewMessage] = useState({
    sender: user.name,
    senderPic: user.pic,
    sentAt: 'Just now',
    body: ''
  })

  const handleChange = (evt) => {
    setNewMessage({...newMessage, body: evt.target.value})
  }

  const handleSend = () => {
    setMessages([...messages, newMessage])
    setNewMessage({...newMessage, body: ''})
  }

  return (
    <div className="col-md-6 col-lg-7 col-xl-8">
  
        <ul className="list-unstyled">
            {messages.map((message, idx) => {
                return <Message key={idx} message={message} user={user} />
            })}
            <li className="bg-white mb-3">
              <div className="form-outline">
                <textarea name="body" className="form-control" id="textAreaExample2" rows="4" onChange={handleChange} value={newMessage.body} placeholder="Message"></textarea>
              </div>
            </li>
            <button type="button" onClick={handleSend} className="btn btn-info btn-rounded float-end">Send</button>
        </ul>
    </div>
  )
}

export default Chatbox