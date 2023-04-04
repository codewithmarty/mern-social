import React, { useRef, useEffect } from 'react'
import Message from '../Message/Message'

const MessageContainer = ({ messages, user }) => {

    const scrollRef = useRef()

    useEffect(() => {
        const myDiv = scrollRef.current
        myDiv.scrollTo({
            top: myDiv.scrollHeight,
            behavior: "smooth",
        });
      },[messages])


  return (
    <div className="list-unstyled message-window" ref={scrollRef}>
        {messages.map((message, idx) => {
            return <Message key={idx} message={message} user={user} />
        })}
    </div>
  )
}

export default MessageContainer