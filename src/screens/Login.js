import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import env from "../environment"

export default function Login() {
  const navigate=useNavigate()
  const [credentials,setCredentials]=useState({
    email:"",
    password:"",
 


})

const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})

}
const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch(`${env.apiurl}/api/loginuser`,{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
    })

    const json=await response.json()
    console.log(json)
    if(!json.success){
        alert(
            "Enter valid credentials"
        )
    }

    if(json.success){
    localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
    navigate("/")
  }

}
  return (
    <div className="login-wrapper">
      <div className="login">
      <h1>Login</h1>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange}/>
  </div>



  <button type="submit" className="m-3 btn btn-primary success">Submit</button>
  <Link to="/createuser" className='m-3 btn btn-success'> New User</Link>
</form>
    </div>
    </div>
  )
}
