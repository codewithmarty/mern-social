import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        bio: '',
        github: '',
        instagram: '',
        portfolio: '',
        projects: []
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const data = formData
        delete data['confirmPassword']
        navigate('/')
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label className="form-label">Bio</label>
            <textarea name='bio' type="text" className="form-control" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
            <label className="form-label">Github</label>
            <input name='github' type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Portfolio</label>
            <input name='portfolio' type="text" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
    </form>  
)
}

export default Edit