import React from 'react'
import './Login.css'

const Login = ({ onRouteChange }) => {
    return (
        <div className="login">
            <form>
                <h1><span>SMART BRAIN</span></h1>
                <input type="email" id="email" name="email" placeholder="Email"  />
                <input type="password" id="password" name="password" placeholder="Password"  />
                <button type="submit" onClick={()=>onRouteChange('home')}>Login</button>
            </form>
            <div className="morestuff">
                <p onClick={()=>onRouteChange('register')}>Register</p>
            </div>
        </div>
    )
}

export default Login