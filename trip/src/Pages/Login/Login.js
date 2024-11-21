import React from 'react'
import './login.scss'

const Login = () => {
  return (
    <div className="signup-container">
      <div className="animated-bg"></div>
      <div className="signup-box">
        <form>
          <div className="input-container">
            <input type="text" required />
            <label>Username</label>
          </div>
          <div className="input-container">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login