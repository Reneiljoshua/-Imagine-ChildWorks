import React from 'react'

const Login = () => {
  return (
    <div className="login">
        <h3>
            LOGIN
        </h3>
        <div className="card">
            <div className="form">
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <a href="/getdetails">
                    <button>Login</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Login
