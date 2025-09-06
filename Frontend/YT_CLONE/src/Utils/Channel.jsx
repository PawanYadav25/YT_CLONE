import React, { useState, useEffect, useContext } from 'react'
import banner from '../IMage/banner.jpg'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

function Channel() {
  const {setUserlgin} = useContext(AuthContext)
  const [chlcret,setchlcret] = useState(false);
  const [loggedin, setloggedin] = useState(false);
  const [chdata, setchdata] = useState({})
  const navigate = useNavigate();

  async function fetchCH(){
         try {
            const URL = 'http://localhost:5000/fetchchannel'
            const headers = {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
            const resp = await fetch(URL,{headers});
            const rslt = await resp.json();
            if(rslt.message == 'success'){
              console.log('Success')
                setchlcret(true)
                setchdata(rslt.data[0])
              }
            if(rslt.message=='No Channel present'){
              setloggedin(true)
            }
              
        } catch (error) {
            console.log(error)
            // alert('something went wrong')
        }
    }

    useEffect(()=>{
      fetchCH();
    },
    []);

    function handlelogOut(){
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      alert('User Logged Off Successfully')
      setUserlgin(false)
      navigate('/login')
    }
    useEffect(()=>{
      console.log(chdata.Channel_desc)
    },[chdata])

  return (
    <>
    { !chlcret && <div className='bg-gray-400 h-screen flex justify-center items-center'>
      
      {!loggedin && <div className='bg-white h-40 w-3/4 md:w-1/4 rounded-2xl flex flex-col justify-center items-center'>
        <p className='font-bold m-5'>No channel found!! Kindly <Link to='/login'>Login</Link></p>
        <div>
          <button className='bg-purple-950 text-white font-bold p-3 w-45 rounded-2xl'>Create Channel</button>
        </div>
      </div>}
      {loggedin && <div className='bg-white h-40 w-3/4 md:w-1/4 rounded-2xl flex flex-col justify-center items-center'>
        <p className='font-bold m-5'>No channel found!!</p>
        <div>
          <button className='bg-purple-950 text-white font-bold p-3 w-45 rounded-2xl'>Create Channel</button>
          <button onClick={()=>{handlelogOut()}} className=' m-3 h-10 w-20 bg-violet-900 rounded-2xl active:bg-violet-300 text-white font-bold'>LogOut</button>
        </div>
      </div>}
    </div> }
    { chlcret && <div><div className='md:flex md:flex-col md:items-center md:m-10'>
      <img className='w-screen md:m-5 h-40 md:rounded-2xl' src={banner} alt="" />
      {<div className='md:flex'>
        <div className='flex justify-center md:w-3/10 lg:w-70'>
          <img className='m-5 h-50 w-50 rounded-full' src={chdata.channel_image} alt="Profile picture" />
        </div>
        <div className='flex flex-col items-center md:items-start md:justify-center m-3 md:w-7/10 lg:w-8/10'>
          <p className='text-2xl font-bold'>{chdata.Channel_person_name}</p>
          <p className='font-bold'>{chdata.Channel_handle}<span className='text-gray-600'>12k Subscriber</span></p>
          <p className='text-gray-400'>{chdata.Channel_desc}</p>
          <button onClick={()=>{handlelogOut()}} className='h-10 w-20 bg-violet-900 rounded-2xl active:bg-violet-300 text-white font-bold'>LogOut</button>
        </div>
      </div>}
    </div><hr />
    
    </div> }
    </>
  )
}

export default Channel
