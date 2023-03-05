import React from 'react'
import Card from '../../components/Card/Card'

const Cards = ({ users, setDetails }) => {
  return (
    <div className="d-flex flex-wrap fade-in-down">
        {users.map((user, idx) => {
            return <Card key={idx} id={idx} user={user} setDetails={setDetails} />
        })}
    </div>
  )
}

export default Cards