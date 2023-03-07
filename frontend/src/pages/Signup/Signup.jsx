import React, { useState } from 'react'
import { signUp } from '../../utilities/users-service'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ({ setUser }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const data = formData
        delete data['confirmPassword']
        setUser(await signUp(data))
        navigate('/')
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input name='firstName' type="text" className="form-control" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input name='lastName' type="text" className="form-control" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input name='password' type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input name='confirmPassword' type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
        <div>Already have an account? <Link className="btn btn-primary" to="/login">Login</Link></div>
    </>

  )
}

export default Signup