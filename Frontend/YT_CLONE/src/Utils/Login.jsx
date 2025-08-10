import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setemail] = useState();
  const [pswd, setpswd] = useState();
  const handlelogin = (e)=>{
    e.preventDefault();
    if(!email || !pswd){
      alert('Kindly enter All the field')
    }
  }
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-violet-300 w-90 md:w-150 h-120 flex items-center justify-center text-2xl rounded-3xl'>
            <form className='text-center'>
                <label className='block m-5 font-bold'>Email_id</label>
                <input onChange={(e)=>{setemail(e.target.value)}} className='p-3 outline-none md:w-90 rounded-2xl focus:bg-white text-center' type="text" placeholder='Enter Email_ID' /><br /><br />
                <label className='block m-5 font-bold'>Password</label>
                <input onChange={(e)=>{setpswd(e.target.value)}} className='p-3 outline-none md:w-90 rounded-2xl focus:bg-white text-center' type="password" placeholder='Enter Password' /><br /><br />
                <p className='text-lg m-2'>New User? <Link to='/signup'><span className='text-blue-500 font-bold'>SignUp</span></Link></p>
                <button className='border-2 p-2 w-40 bg-violet-600' onClick={handlelogin} >Login</button>
            </form>
        </div>
    </div>
    </>
  )
}
