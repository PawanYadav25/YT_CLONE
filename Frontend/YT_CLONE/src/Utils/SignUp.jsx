import React from "react";
import { useState } from "react";
import { Link, useNavigate} from 'react-router-dom'
function SignUp(){

    const navigate = useNavigate();
    const [singup, setsingup] = useState({
        userName : "",
        Email_id : "",
        password : ""
    })

    const handleupdate = (e)=>{
        const {name, value} = e.target;
        const copyloginInfo = {...singup} 
        copyloginInfo[name] = value;
        setsingup(copyloginInfo)
    }

    const handlelogin = async (e)=>{
        e.preventDefault();
        const {userName, Email_id, password} = singup
        if(!userName || !Email_id || !password ){
            alert('Kindly fill all the field to SignUp')
            return
        }
        if(password.length < 5){
            alert('Password length should be greater 5 Digit')
            return
        }
        
        try {
            const response = await fetch('http://localhost:5000/register',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json' 
                },
                body : JSON.stringify(singup)
            });
            const result = await response.json();
            console.log(result.message)
            if(result.message == 'duplicate')
            {
                alert('User Already present kindly login')
                navigate('/login')
            }
            if(result.message == 'Success')
            {
                alert('User Successfully Register, Kindly login')
                navigate('/login')
            }
        } catch (error) {
            alert(`${error.message}`);
        }
    }


    return (
        <>
        <div className='flex justify-center items-center'>
        <div className='bg-violet-300 mt-10 w-90 md:w-150 h-120 flex items-center justify-center rounded-3xl'>
            <form className='text-center'>
                <label className='block m-5 font-bold'>Email ID</label>
                <input onChange={handleupdate} className='p-3 outline-none md:w-90 w-80 rounded-2xl focus:bg-white text-center border-b-2' name="Email_id" type="text" placeholder='Enter Email ID' /><br />
                <label className='block m-5 font-bold'>User Name</label>
                <input onChange={handleupdate} className='p-3 outline-none md:w-90 w-80 rounded-2xl focus:bg-white text-center border-b-2' name="userName" type="text" placeholder='Enter Username' /><br />
                <label className='block m-5 font-bold'>Password</label>
                <input onChange={handleupdate} className='p-3 outline-none md:w-90 w-80 rounded-2xl focus:bg-white text-center border-b-2' name='password' type="password" placeholder='Enter Password' /><br />
                <button onClick={handlelogin} className='mt-5 border-2 p-2 md:w-90 w-70 bg-violet-600 focus:bg-white'>Create Account</button>
            </form>
        </div>
    </div>
        </>
    )
}

export default SignUp