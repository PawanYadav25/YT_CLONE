import React from 'react'
import logo from "../IMage/Ylogo.webp"
import Srchicon from "../IMage/Search.png"

export default function Header() {
  return (
    <div className='flex h-15 justify-around items-center'>
      <div>
        <img className='h-5 md:ml-3' src={logo} alt="Youtube logo" />
      </div>
      <div className=' flex justify-center w-50 md:w-2/5'>
        <div className='flex justify-center w-full'>
            <div>
            <input className='h-10 outline-none p-4 rounded-l-4xl w-full md:w-90 border-gray-400 border-1 flex items-end focus:border-blue-400 focus:border-2' type="text" placeholder='Search' />
            </div>
            <div>
            <button className='bg-gray-400 w-9 md:w-15 h-10 align-middle rounded-r-4xl flex border-gray-400 border-1 justify-center items-center'><img className='h-5' src={Srchicon} alt="search button" /></button>
            </div>
        </div>
      </div>
      <div>
        <button className='font-bold p-2 rounded-3xl border-1 border-blue-500 text-blue-600 md:w-30'>Sign In</button>
      </div>
    </div>
  )
}
