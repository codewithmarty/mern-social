import React from 'react'
import Project from '../../components/Project/Project'

const Detail = ({ details }) => {
  return (
        <div class="container my-5 fade-in-image">
            <div class="row">
                <div class="col-md-5">
                    <div class="main-img">
                        <img class="img-fluid w-100 card-image rounded" src={details.pic} alt="ProductS" />
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="main-description px-2">
                        <h2>{details.name}</h2>
                        <div class="category text-bold text-success">
                            {details.role}
                        </div>
                        <div class="bio text-bold my-3">
                            {details.bio}
                        </div>
                        <a href={details.instagram} target="_blank"><div className="fa fa-instagram"></div></a>
                        <a href={details.github} target="_blank"><div className="fa fa-github"></div></a>
                        <a href={"mailto:"+details.email}><div className="fa fa-envelope"></div></a>
                        <a href={details.portfolio} target="_blank"><div className="fa fa-external-link"></div></a>

                        <div class="price-area my-4">
                            <p class="text-secondary mb-1">Check out some of my projects!</p>
                        </div>

                    </div>
                
                </div>
            </div>

        <div class="container similar-products my-4">
            <hr />
            <p class="display-5">Projects</p>
            <div class="row">
                {details.projects.map(project => {
                    return <Project project={project}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Detail