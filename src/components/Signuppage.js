import React from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './css/Signup.css'


const Signup = (props) => {
  
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    //To do API call
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //Save the authtoken and redirect
      localStorage.setItem('authtoken', json.authtoken);
      navigate("/");
      props.showAlert("Account Created Successfully", "success");

    }
    else {
      props.showAlert("Invalid Credentials", "danger");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" onChange={onChange} name="name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" onChange={onChange} name="password" minLength={5} required />
            </div>
            <div className="mb-4">
              <label htmlFor="cpassword" className="form-label">Comfirm Password</label>
              <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" minLength={5} required />
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </form>
        </div>
      </div>
    </>

  )
}

export default Signup;