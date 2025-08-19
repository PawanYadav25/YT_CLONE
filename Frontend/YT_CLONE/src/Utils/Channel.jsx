import React, { useState } from 'react'
import banner from '../IMage/banner.jpg'

function Channel() {
  const [chlcret,setchlcret] = useState(true);
  return (
    <>
    { !chlcret && <div className='bg-gray-400 h-screen flex justify-center items-center'>
      <div className='bg-white h-40 w-3/4 md:w-1/4 rounded-2xl flex flex-col justify-center items-center'>
        <p className='font-bold m-5'>No channel found!!</p>
        <div>
          <button className='bg-purple-950 text-white font-bold p-3 w-45 rounded-2xl'>Create Channel</button>
        </div>
      </div>
    </div> }
    { chlcret && <div><div className='md:flex md:flex-col md:items-center md:m-10'>
      <img className='w-screen md:m-5 h-40 md:rounded-2xl' src={banner} alt="" />
      <div className='md:flex'>
        <div className='flex justify-center md:w-3/10 lg:w-2/10'>
          <img className='m-5 h-50 w-50 rounded-full' src='https://ik.imagekit.io/Pawan2509/Thumbnail%20Image/Cartoon.png?updatedAt=1755348164176' alt="Profile picture" />
        </div>
        <div className='flex flex-col items-center md:items-start md:justify-center m-3 md:w-7/10 lg:w-8/10'>
          <p className='text-2xl font-bold'>Pawan Yadav</p>
          <p className='font-bold'>pawan@123 <span className='text-gray-600'>12k Subscriber</span></p>
          <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cum illum quisquam, quibusdam optio error qui, minus similique facere a cupiditate vero laborum. Laudantium distinctio deserunt ut dolorem aut incidunt!</p>
        </div>
      </div>
    </div><hr /></div> }
    </>
  )
}

export default Channel
