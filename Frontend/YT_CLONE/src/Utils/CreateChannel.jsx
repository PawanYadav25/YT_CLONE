import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';

function CreateChannel() {
  const {loggedIn,setUserlgin} = useContext(AuthContext);
  const navigate = useNavigate();
  const [chlName,setchlName] = useState('');
  const [chlDesc,setchlDesc] = useState('');

  async function fetchCH(){
           try {
              const URL = 'http://localhost:5000/fetchchannel'
              const headers = {
                  'Content-Type': 'application/json',
                  'Authorization' : localStorage.getItem('token')
              }
              const resp = await fetch(URL,{headers});
              const rslt = await resp.json();
              if(rslt.message=='token expire'){
                setUserlgin(false)
              }
                
          } catch (error) {
              console.log(error)
          }
      }
  
      useEffect(()=>{
        fetchCH();
      },
      []);






  const handleChCret = async (e)=>{
    e.preventDefault();
        if(!chlName || !chlDesc ){
            alert('Kindly fill all the field')
            return
        }
        if(chlDesc.length < 15){
            alert('Description length should be greater 15 Characters')
            return
        }
        
        try {
            const response = await fetch('http://localhost:5000/createChannel',{
                method : 'POST',
                headers : {
                  'Content-Type': 'application/json',
                  'Authorization' : localStorage.getItem('token')
                },
                body : JSON.stringify({Channel_person_name : localStorage.getItem('userName'), Channel_handle : chlName, Channel_desc:chlDesc })
            });
            const result = await response.json();
            console.log(result)
            if(result.Message == 'duplicate')
            {
                alert('Channel already present')
                navigate('/channel')
            }
            if(result.Message == 'Success')
            {
                alert('User Successfully created the channel')
                navigate('/channel')
            }
            if(result.message=='token expire'){
              setUserlgin(false)
            }
        } catch (error) {
            alert(`${error.message}`);
        }
  }
  return (
    <>
        {loggedIn && <div className='flex justify-center items-center'>
        <div className='bg-black text-white mt-10 w-90 md:w-150 h-120 flex items-center justify-center rounded-3xl'>
            <form className='text-center'>
                <label className='block m-5 font-bold'>Channel Handle Name</label>
                <input onChange={(e)=>{setchlName(e.target.value)}} className='p-3 text-black outline-none md:w-90 w-80 rounded-2xl bg-white text-center' type="text" placeholder='Enter Channel' /><br />
                <label className='block m-5 font-bold'>Channel Descritption</label>
                <input onChange={(e)=>{setchlDesc(e.target.value)}} className='p-3 text-black outline-none md:w-90 w-80 rounded-2xl bg-white text-center' type="text" placeholder='Enter Channel Description' /><br />
                <button onClick={handleChCret}  className='mt-5 border-2 p-2 md:w-90 w-70 bg-violet-600 focus:bg-white'>Create Channel</button>
            </form>
        </div>
    </div>}
    {!loggedIn && <div className='flex flex-col justify-center items-center'>
      <div className='bg-amber-500 h-40 w-3/4 md:w-1/4 rounded-2xl flex flex-col justify-center items-center'>
            <p className='font-bold m-5'>Error found!! Kindly <Link className='text-lg text-blue-600' to='/login'>Login</Link></p>
          </div></div>}
        </>
  )
}

export default CreateChannel
