import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// react redux
import {useDispatch} from "react-redux"
import { logout as AuthLogout } from '..//../ReduxSrore/AuthSlice.js'
import { Adminlogin as AuthAdminlogint } from '..//../ReduxSrore/AuthSlice.js'

const UserLogut = () => {
  const authStatusAdmin = useSelector((state) => state.auth.isAdminLoggedIn);
  const authadmin = useSelector((state) => state.auth.admin);
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  const authuser = useSelector((state) => state.auth.user);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const hndelClick = () => {

     
        dispatch(AuthAdminlogint())
        // alert(`Admin logout succefully`)
        // navigate("/")
    
        dispatch(AuthLogout())
        localStorage.removeItem("favorites")
        alert(`logout succefully`)
        navigate("/")

      
        
    }
  return (
    <div>
      <button style={{backgroundColor:"transparent" ,color:"red", fontSize:"20px",border:"none"}} onClick={hndelClick}>logout</button>
    </div>
  )
}

export default UserLogut
