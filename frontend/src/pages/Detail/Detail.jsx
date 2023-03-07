import React from 'react'
import Project from '../../components/Project/Project'
import { Link } from 'react-router-dom'

const Detail = ({ details, user }) => {
  return (
        <div className="container my-5 fade-in-image">
            <div className="row">
                <div className="col-md-5">
                    <div className="main-img">
                        <img className="img-fluid w-100 card-image rounded" src={details.pic} alt="ProductS" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="main-description px-2">
                        <h2>{details.firstName} {details.lastName}</h2>
                        {details._id == user._id ? 
                            <Link className="btn btn-primary" to="/profile/edit">Edit Profile</Link>
                        :
                            <></>
                        }
                        <div className="category text-bold text-success">
                            {details.role}
                        </div>
                        <div className="bio text-bold my-3">
                            {details.bio}
                        </div>
                        <a href={details.instagram} target="_blank"><div className="fa fa-instagram"></div></a>
                        <a href={details.github} target="_blank"><div className="fa fa-github"></div></a>
                        <a href={"mailto:"+details.email}><div className="fa fa-envelope"></div></a>
                        <a href={details.portfolio} target="_blank"><div className="fa fa-external-link"></div></a>

                        <div className="price-area my-4">
                            <p className="text-secondary mb-1">Check out some of my projects!</p>
                        </div>

                    </div>
                
                </div>
            </div>

        <div className="container similar-products my-4">
            <hr />
            <p className="display-5">Projects</p>
            <div className="row">
                {details.projects.map(project => {
                    return <Project project={project}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Detail