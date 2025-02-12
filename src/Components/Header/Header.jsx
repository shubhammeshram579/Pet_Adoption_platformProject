import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Pages/HomePage/HomePages/Logo/Logo.jsx"
import "../Pages/HomePage/HomePages/Style.css"

const Header = () => {
  return (
    <>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#111",padding:"10px 20px",position:"fixed", top:"0" ,zIndex:"9999999" ,width:"100%"}}>
        <div>
            <Logo />
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between" ,gap:"50px"}}>
        <Link id='NavItems'  to="/">home</Link>
        <Link id='NavItems' to="/FindaPet">Find a Pet</Link>
        <Link id='NavItems'  to="/AvailablePets">Available Pets</Link>
        <Link id='NavItems'  to="/AdoptionProcess">Adoption Process</Link>
        <Link id='NavItems' to="/SheltersNearYou">Shelters Near You</Link>
        <Link id='NavItems'  to="/MyAccount">My Account</Link>
        <Link id='NavItems'  to="/ContactUs">Contact Us</Link>
        {/* <Link style={{color:"yellow"}}  to="/Favorate">Favrate</Link> */}
        </div>
    </div>
    </>

  )
}

export default Header
