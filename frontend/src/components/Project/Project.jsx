import React from 'react'

const Project = ({ project }) => {
  return (
    <div class="col-md-3 border m-2 p-2">
        <div class="similar-product">
            <img class="project-image w-100 rounded m-2" src={project.img} alt="Preview" />
            <h5>{project.name}</h5>
            <p class="project-description">{project.description}</p>
        </div>
    </div>
  )
}

export default Project