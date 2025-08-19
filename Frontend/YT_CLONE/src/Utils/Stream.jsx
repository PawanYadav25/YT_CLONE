import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import like from '../IMage/like.png'
import dislike from '../IMage/dislike.png'
import share from '../IMage/share.png'
import user from '../IMage/user.png'

export default function Stream() {
    const { id } = useParams();
    const [data, setdata] = useState([]);
    const [likecount, setlikecount] = useState(0);
    const [LoginSwitch, setLoginSwitch] = useState(false)
    const [Vdata, setVdata] = useState([])
    const [upcomment, setupcomment] = useState([])
    const [message, setmessage] = useState('');

    async function fetchVD(){
         try {
            const URL = 'http://localhost:5000/extractVideo'
            const headers = {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
            const resp = await fetch(URL,{headers});
            const rslt = await resp.json();
            if(rslt.message == 'success'){
                setLoginSwitch(true);
                const ftrdata = rslt.data.filter(dt=> dt.Video_id != id)
                setdata(ftrdata);
            }else{
                setLoginSwitch(false);
                localStorage.removeItem('token')
                localStorage.removeItem('userName')
            }
           
        } catch (error) {
            console.log(error)
            // alert('something went wrong')
        }
    }

    
    async function fetchdata(){
             try {
                const URL = `http://localhost:5000/${id}`
                const headers = {
                    'Authorization' : localStorage.getItem('token')
                }
                const response = await fetch(URL,{headers});
                const result = await response.json();
                if(result.message == 'success'){
                    setLoginSwitch(true);
                    setVdata(result.data)
                    setlikecount(result.data[0].like)
                    setupcomment(result.data[0].comment)
                }else{
                    setLoginSwitch(false);
                    localStorage.removeItem('token')
                    localStorage.removeItem('userName')
                }
               
            } catch (error) {
                console.log(error)
                alert('something went wrong')
            }
        }
    
        useEffect(()=>{
            fetchdata();
            fetchVD();
        },
        [id])

    async function backendlike(){
        try {
            const response = await fetch(`http://localhost:5000/${id}/like`,{
                method : 'PUT',
                headers : {
                    'Authorization' : localStorage.getItem('token')
                }
            });
            const result = await response.json()
        } catch (error) {
            alert(`${error.message}`);
        }
    }
    function handlelike(){
        setlikecount(likecount+1)
        backendlike()
    }

    async function backaddcomment(){
        try {
            const response = await fetch(`http://localhost:5000/${id}/comment`,{
                method : 'PUT',
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization' : localStorage.getItem('token')
                },
                body : JSON.stringify({user: localStorage.getItem('userName'), message: message})
            });
            const result = await response.json()
        } catch (error) {
            alert(`${error.message}`);
        }
    }

    function handleComment(){
        if(message==''){
            alert('Kindly fill the comment input')
            return
        }
        setupcomment(prev => [{ user: localStorage.getItem('userName'), message: message },...prev]);
        backaddcomment()
        setmessage('')
    }

  return (
    <>
    { LoginSwitch && <div className='lg:flex md:ml-18 lg:ml-20'>
        {Vdata.length > 0 && <div className='lg:w-7/10 md:mr-18 lg:mr-20'>
            <div className='mt-5'>
                <div className=''>
                    <video className='w-10/10 md:rounded-2xl' src={Vdata[0].video_link} controls></video>
                </div>
                <p className='font-bold ml-3 md:ml-0 md:mt-2 md:text-2xl' >{Vdata[0].video_title}</p>
            </div>
            <div>
                <div className='flex md:justify-between flex-wrap ml-2'>
                    <div className='flex items-center mt-3'>
                        <img className='h-10 rounded-4xl mr-3' src={Vdata[0].channel_image} alt="" />
                        <div className='mr-5'>
                            <p className='font-bold'>{Vdata[0].channel_Name}</p>
                            <p className='text-gray-500'>12k subscriber</p>
                        </div>
                        <button className='bg-black rounded-3xl text-white p-2 w-29'>Subscribe</button>
                    </div>
                    <div className='flex mt-3'>
                        <button onClick={()=>{handlelike()}} className='bg-gray-300 w-20 h-8 rounded-l-4xl flex justify-center items-center hover:bg-gray-400'><img className='h-6' src={like} alt="Like" /><span>{likecount}</span></button>
                        <button className='bg-gray-300 w-20 h-8 rounded-r-4xl flex justify-center items-center mr-3 hover:bg-gray-400' ><img className='h-6' src={dislike} alt="dislike" /></button>
                        <button className='bg-gray-300 w-25 h-8 rounded-4xl flex justify-center items-center mr-5 hover:bg-gray-400' ><img className='h-6' src={share} alt="Share" /><span className='ml-1'>Share</span></button>
                    </div>
                </div>
            </div>
            <div className='p-3 bg-gray-300 rounded-2xl mt-3'>
                <p className='font-bold text-lg'>Description</p>
                <p>{Vdata[0].description}</p>
            </div>
            <div>
                <div className='mt-5 ml-3 md:ml-0 mb-4'>
                    <p className='font-bold text-lg'>Comments</p>
                    <input onChange={(e)=>{setmessage(e.target.value)}} value={message} className='border-b-2 border-black w-2/3 outline-none ' type="text" placeholder='Add comment'/>
                    <button onClick={()=>{handleComment()}} className='bg-blue-500 w-20 h-8 rounded-3xl text-white'>Add</button>
                </div>
                <div>
                    {upcomment.map((dt,index)=>
                    <div key={index} className='flex'>
                        
                        <img className='w-10 h-10 mt-3 rounded-4xl' src={user} alt="user icon" />
                        
                        <div className='m-2'>
                            <p className='font-bold'>{dt.user}</p>
                            <p className='ml-2'>{dt.message}</p>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>}
        <div className='h-screen lg:w-3/10'>
        <p className='font-bold text-2xl'>More Videos</p>
            <div className='flex flex-wrap'>
                            {data.map((dt,index)=>(
                            <div key={index} className='bg-white sm:m-5 w-full sm:w-100 sm:rounded-2xl overflow-hidden'>
                                <div className='w-full'>
                                    <Link to={`/${dt.Video_id}`}><img className='w-full h-40 sm:rounded-2xl mb-3' src={dt.thumbnail_image} alt="thumbnail" /></Link>
                                </div>
                                <div className='m-3 flex '>
                                    <div className='w-2/10'>
                                        <img className='h-12 w-12 rounded-full' src={dt.channel_image} alt="Channel image" />
                                    </div>
                                    <div className='w-8/10'>
                                        <p className='font-bold'>{dt.video_title}</p>
                                        <p className='text-gray-500'>{dt.channel_Name}</p>
                                        <p className='text-gray-500'>{dt.Views} Views</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div></div>
    </div>}

    { !LoginSwitch && <div className='flex justify-center'>
                <div className='h-20 w-9/10 md:w-4/10 bg-black m-3 text-white font-bold flex justify-center items-center rounded-2xl'>
                    <p>No Video to show, Kindly choose the correct Video</p>
                </div>
            </div>}
    </>
  )
}
