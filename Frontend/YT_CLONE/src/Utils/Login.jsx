import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [Email_id, setEmail_id] = useState();
  const [password, setpassword] = useState();
  const handlelogin = async (e)=>{
    e.preventDefault();
    if(!Email_id || !password){
      alert('Kindly enter all the field');
      return
    }
    try {
      const response = await fetch('http://localhost:5000/login',{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json' 
        },
        body : JSON.stringify({Email_id : Email_id, password : password})
      })
      const result = await response.json();
      if(result.message == 'Not Register'){
        alert('No Record Found, Please register first')
        return
      }
      if(result.message =='success'){
        alert('User Login Successfully')
        localStorage.setItem('token',result.generatedToken)
        localStorage.setItem('userName',result.userName)
        navigate("/")
      }
      if(result.message == 'Email and Pswd')
      {
        alert('Kindly check the Email and password')
      }
    } catch (error) {
      alert("We are getting error, Kindly check console for the error")
      console.log(error)
    }
  }
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-violet-300 w-90 md:w-150 h-120 flex items-center justify-center text-2xl rounded-3xl'>
            <form className='text-center'>
                <label className='block m-5 font-bold'>Email_id</label>
                <input onChange={(e)=>{setEmail_id(e.target.value)}} className='p-3 outline-none md:w-90 rounded-2xl focus:bg-white text-center border-b-2' type="text" placeholder='Enter Email_ID' /><br /><br />
                <label className='block m-5 font-bold'>Password</label>
                <input onChange={(e)=>{setpassword(e.target.value)}} className='p-3 outline-none md:w-90 rounded-2xl focus:bg-white text-center border-b-2' type="password" placeholder='Enter Password' /><br /><br />
                <p className='text-lg m-2'>New User? <Link to='/signup'><span className='text-blue-500 font-bold'>SignUp</span></Link></p>
                <button className='border-2 p-2 w-40 bg-violet-600' onClick={handlelogin} >Login</button>
            </form>
        </div>
    </div>
    </>
  )
}
