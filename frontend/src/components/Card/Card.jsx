import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ user, id, setDetails }) => {
  return (
    <div className="card m-2 fade-in-image" style={{width: "18rem"}} onClick={() => setDetails(user)}>
        <img src={user.pic} className="card-image card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title text-primary">{user.firstName} {user.lastName}</h5>
            <h6 className="card-title text-success">{user.role}</h6>
            <p className="card-text text-secondary">{user.bio.substring(0, 120)+"..."}</p>
            <Link to={"/"+user._id} className="btn btn-primary">See More</Link>
        </div>
    </div>
  )
}

export default Card