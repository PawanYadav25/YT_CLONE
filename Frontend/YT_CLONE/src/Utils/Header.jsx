import React, { useState, useEffect, } from 'react'
import logo from "../IMage/Ylogo.webp"
import Srchicon from "../IMage/Search.png"
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './AuthContext'



export default function Header() {
  const navigate = useNavigate();
  const {loggedIn, setUserlgin} = useContext(AuthContext)
  const [showMenu, setShowMenu] = useState(false);


  function handlelogOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    alert('User Logged Off Successfully')
    setUserlgin(false)
    navigate('/login')
  }


  return (
    <div className='flex h-15 justify-around items-center'>
      <div><Link to='/'>
        <img className='h-5 md:ml-3' src={logo} alt="Youtube logo" /></Link>
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
      {!loggedIn && <div>
        <Link to='/login'>
        <button className='font-bold p-2 rounded-3xl border-1 border-blue-500 text-blue-600 md:w-30'>SignIN</button></Link>
      </div>}
      {loggedIn && (
        <div
          className="relative"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <button className="font-bold p-2 rounded-3xl border-1 border-blue-500 text-blue-600 md:w-30">
            {localStorage.getItem('userName')}
          </button>

          {showMenu && (
            <div className="absolute right-0 w-40 bg-white border rounded-lg shadow-lg">
              <Link to='/channel'><button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Channel
              </button></Link>
              <button
                onClick={()=>{handlelogOut()}}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )
      
      }
    </div>
  )
}
