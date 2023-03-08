import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateBioLinks } from '../../utilities/users-api'

const Edit = ({ setUser, setDetails }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        bio: '',
        github: '',
        instagram: '',
        portfolio: '',
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const updatedUser = await updateBioLinks(formData)
        setUser(updatedUser)
        setDetails(updatedUser)
        navigate('/profile')
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Bio</label>
            <textarea name='bio' type="text" className="form-control" value={formData.bio} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
            <label className="form-label">Github</label>
            <input name='github' type="text" className="form-control" value={formData.github} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Instagram</label>
            <input name='instagram' type="text" className="form-control" value={formData.instagram}  onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Portfolio</label>
            <input name='portfolio' type="text" className="form-control"  value={formData.portfolio} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Update Profile</button>
    </form>  
)
}

export default Edit