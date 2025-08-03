import React, { useState } from 'react'
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
    const [sidebar, useSidebar] = useState(true)
    function side(){
        useSidebar(!sidebar);
    }
  return (
    <>
    {  }
    <div className='flex justify-center h-screen'>
        { sidebar && <div className='h-screen w-20'>
            <button onClick={()=>{side()}} className='ml-5  lg:ml-7 hover:bg-gray-300 p-2 rounded-4xl focus:bg-gray-400 md:fixed md:top-3' ><img className='h-5' src={bar} alt="Button" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={home} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={short} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={subs} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={music} alt="Home page" /></button>
            <button className='w-15 h-15 hover:bg-gray-300 transition-all ease-in-out duration-700 hover: rounded-2xl m-2 text-left flex items-center'><img className='h-5 mr-3 ml-5' src={film} alt="Home page" /></button>
        </div> }
        { !sidebar && <div className='h-screen'>
            <button onClick={()=>{side()}} className='ml-5 lg:ml-7 hover:bg-gray-300 p-2 rounded-4xl focus:bg-gray-400 md:fixed md:top-3' ><img className='h-5' src={bar} alt="Button" /></button><br />
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
        <div className='h-screen w-screen'>

        </div>
    </div>
    </>
  )
}
