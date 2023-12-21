import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './css/Login.css'


const Login = (props) => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //To do API call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password }),
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //Save the authtoken and redirect
      localStorage.setItem('authtoken', json.authtoken);
      props.showAlert("Logged in Successfully", "success");
      navigate("/");
    }
    else {
      props.showAlert("Invalid Details", "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="form-container">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name="email" value={credentials.email}
                onChange={onChange}
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" value={credentials.password}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;