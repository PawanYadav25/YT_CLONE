import Header from "./Utils/Header"
import { Outlet } from "react-router-dom"
import AuthContext from "./Utils/AuthContext"
import { useEffect, useState } from "react"
function App() {
  const [userlgin, setUserlgin] = useState(false)
  useEffect(()=>{
    const vld = localStorage.getItem('token')
    if(vld){
      setUserlgin(true)
    }
  },[])

  return (
    <>
    <AuthContext.Provider value={{loggedIn : userlgin, setUserlgin}}>
      <Header/>
      <Outlet/>
      </AuthContext.Provider>
    </>
  )
}

export default App
