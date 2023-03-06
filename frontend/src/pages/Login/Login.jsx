import React, { useState } from 'react'
import { login } from '../../utilities/users-service'
import { Link } from 'react-router-dom'

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const user = formData
        delete user['confirmPassword']
        login(user)
    }

  return (
    <>    
        <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div>Don't have an account? <Link className="btn btn-primary" to="/signup">Register</Link></div>
    </>

  )
}

export default Login