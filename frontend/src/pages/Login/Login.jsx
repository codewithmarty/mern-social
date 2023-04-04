import React, { useState } from 'react'
import { login } from '../../utilities/users-service'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ setUser }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        const data = formData
        setUser(await login(data))
        navigate('/')
    }

  return (
    <>    
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input name='password' type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div>Don't have an account? <Link className="btn btn-primary" to="/signup">Register</Link></div>
    </>

  )
}

export default Login