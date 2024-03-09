import React from 'react'

const Signup = () => {
  return (
    <div className="signup">
    <h3>
        SIGNUP
    </h3>
    <div className="card">
        <div className="form">
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <a href="/getdetails">
                <button>Signup</button>
            </a>
        </div>
    </div>
</div>
  )
}

export default Signup
