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
    { chlcret && <div className='flex justify-center'>
      <img className='w-screen  md:m-5 h-40 md:rounded-2xl' src={banner} alt="" />
    </div> }
    </>
  )
}

export default Channel
