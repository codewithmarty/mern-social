import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addProject } from '../../utilities/users-api'

const AddProject = ({ setUser, setDetails }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        img: '',
        description: '',
        github: '',
        technologies: '',
        deployed: ''
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const updatedUser = await addProject(formData)
        setUser(updatedUser)
        setDetails(updatedUser)
        navigate('/profile')
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Name of Project</label>
            <textarea name='name' type="text" className="form-control" value={formData.name} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
            <label className="form-label">GitHub Image Link</label>
            <input name='img' type="text" className="form-control" value={formData.img} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Description of Project</label>
            <textarea name='description' type="text" className="form-control" value={formData.description}  onChange={handleChange} ></textarea>
        </div>
        <div className="mb-3">
            <label className="form-label">Technologies</label>
            <input name='technologies' type="text" className="form-control" value={formData.technologies} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Github Repo Link</label>
            <input name='github' type="text" className="form-control" value={formData.github} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Deployed Link</label>
            <input name='deployed' type="text" className="form-control" value={formData.deployed} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Project</button>
    </form>  
)
}

export default AddProject