import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bar from "../IMage/menu.png"
import home from "../IMage/home.png"
import short from "../IMage/short.png"
import subs from "../IMage/subscribe.png"
import music from "../IMage/Music.png"
import film from "../IMage/film.png"
import live from "../IMage/live.png"
import gaming from "../IMage/gaming.png"
import news from "../IMage/news.png"
import sport from "../IMage/sport.png"
import course from "../IMage/learning.png"
import fash from "../IMage/costume.png"
import pod from "../IMage/Postcast.png"


export default function Home() {

    const [data, setdata] = useState([]);
    const [LoginSwitch, setLoginSwitch] = useState(false)

    async function fetchdata(){
         try {
            const URL = 'http://localhost:5000/extractVideo'
            const headers = {
                'Authorization' : localStorage.getItem('token')
            }
            const response = await fetch(URL,{headers});
            const result = await response.json();
            if(result.message == 'success'){
                setLoginSwitch(true);
                setdata(result.data);
                setfdata(result.data)
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

    useEffect(()=>{
        fetchdata();
    },
    [])



    const [fdata, setfdata] = useState(data);

    function CategoryGaming(){
        const ndata = data.filter(dt=>dt.Video_category == 'Gaming')
        setfdata(ndata);
    }

    function CategoryAll(){
        setfdata(data);
    }

    function CategoryLearning(){
        const ndata = data.filter(dt=>dt.Video_category == 'Learning')
        setfdata(ndata);
    }

    function CategoryFood(){
        const ndata = data.filter(dt=>dt.Video_category == 'Food')
        setfdata(ndata);
    }

    const [sidebar, useSidebar] = useState(true)
    function side(){
        useSidebar(!sidebar);
    }
  return (
    <>
    <div className='flex justify-center h-screen '>
        { sidebar && <div className='h-screen w-20 hidden sm:flex sm:flex-col'>
            <button onClick={()=>{side()}} className='ml-5  lg:ml-7 hover:bg-gray-300 p-2 rounded-4xl focus:bg-gray-400 sm:fixed sm:top-3' ><img className='h-5' src={bar} alt="Button" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={home} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={short} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={subs} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={music} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={film} alt="Home page" /></button>
        </div> }
        { !sidebar && <div className='h-screen hidden sm:flex sm:flex-col'>
            <button onClick={()=>{side()}} className='ml-5 lg:ml-7 hover:bg-gray-300 p-2 rounded-4xl focus:bg-gray-400 sm:fixed sm:top-3' ><img className='h-5' src={bar} alt="Button" /></button><br />
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={home} alt="Home page" /><span>Home</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={short} alt="Home page" /><span>Shorts</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={subs} alt="Home page" /><span>Subscription</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={music} alt="Home page" /><span>Music</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={film} alt="Home page" /><span>Films</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={live} alt="Home page" /><span>Live</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={gaming} alt="Home page" /><span>Gaming</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={news} alt="Home page" /><span>News</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={sport} alt="Home page" /><span>Sport</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={course} alt="Home page" /><span>Course</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={fash} alt="Home page" /><span>Fashion & beauty</span></button>
            <button className='w-50 h-10 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={pod} alt="Home page" /><span>Podcasts</span></button>
        </div> }
        <div className='h-screen w-screen sm:m-5'>
            <div className='h-10 mb-5 md:mb-0 lg:ml-3'>
                <button onClick={()=>{CategoryAll()}} className='bg-black text-sm text-white m-2 p-2 w-12 rounded-[0.7vw]'>All</button>
                <button onClick={()=>{CategoryGaming()}} className='bg-black text-sm text-white m-2 p-2 rounded-[0.7vw]'>Gaming</button>
                <button onClick={()=>{CategoryLearning()}} className='bg-black text-sm text-white m-2 p-2 rounded-[0.7vw]'>Learning</button>
                <button onClick={()=>{CategoryFood()}} className='bg-black text-sm text-white m-2 p-2 rounded-[0.7vw]'>Food</button>
            </div>
            { LoginSwitch && <div className='flex flex-wrap'>
                {fdata.map((dt,index)=>(
                <div key={index} className='bg-white sm:m-5 h-90 w-full sm:w-100 sm:rounded-2xl overflow-hidden'>
                    <div className='w-full'>
                        <Link to={`/${dt.Video_id}`}><img className='w-full h-60 sm:rounded-2xl mb-3' src={dt.thumbnail_image} alt="thumbnail" /></Link>
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
            </div>}

            { !LoginSwitch && <div className='flex justify-center'>
                <div className='h-20 w-9/10 md:w-4/10 bg-black m-3 text-white font-bold flex justify-center items-center rounded-2xl'>
                    <p>To access the video, Kindly <Link to='/login' className='text-blue-600 text-xl'>login</Link></p>
                </div>
            </div>}
        </div>
    </div>
    </>
  )
}
