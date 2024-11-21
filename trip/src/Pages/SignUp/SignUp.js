import React from 'react';
import './signup.scss';

function SignUp() {
  return (
    <div className="signup-container">
    <div className="animated-bg"></div>
    <div className="signup-box">
      <form>
        <div className="input-container">
          <input type="text" required />
          <label>name</label>
        </div>
        <div className="input-container">
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-container">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  </div>
  );
}

export default SignUp;
