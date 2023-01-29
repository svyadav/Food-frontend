import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import env from "../environment"

export default function Signup() {
  const navigate=useNavigate()
    const [credentials,setCredentials]=useState({
        name:"",
        email:"",
        password:"",
        geolocation:""


    })

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch(`${env.apiurl}/api/createuser`,{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,geolocation:credentials.geolocation})
        })

        const json=await response.json()
        console.log(json)
        if(!json.success){
            alert(
                "Enter valid credentials"
            )
        }

    }
  return (
    <>
    <div className="login-wrapper">
      <div className="login">
      <h1>Sign up</h1>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange}/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}/>
  </div>

  <button type="submit" className="m-3 btn btn-primary success" onClick={()=>navigate('/login')}>Submit</button>
  <Link to="/login" className='m-3 btn btn-success'> Already a User</Link>
</form>
    </div>
    </div>
 
    </>
  )
}
