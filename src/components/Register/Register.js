import React from 'react'
import './Register.css'

const Register = ({ onRouteChange }) => {
    return (
        <div className="login">
            <form>
                <h1><span>SMART BRAIN</span></h1>
                <input type="text" id="username" name="username" placeholder="User Name"  />
                <input type="email" id="email" name="email" placeholder="Email"  />
                <input type="password" id="password" name="password" placeholder="Password"  />
                <button type="submit" onClick={()=>onRouteChange('home')}>Register</button>
            </form>
        </div>
    )
}

export default Register