import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Pages/HomePage/HomePages/Logo/Logo.jsx"
import "..//..//../src/App.css"
import { useSelector } from 'react-redux'
import UserLogut from "../User/UserLogut.jsx"

const Header = () => {
  const authStatus = useSelector((state) => state.auth.isLoggedIn);
  // const user = useSelector((state) => state.auth.user);
  return (
    <>
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: "99999",
        padding: "4px 70px",
        width: "100%",
        backgroundColor: "#191919",
      }}
    >
      
      <nav className="navbar navbar-expand-lg navbar-light">
      <Logo />
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto pr-5" >
            <li className="nav-item active">
             <Link
                id="navItemss"
                className="nav-link "
                style={{ fontSize: "20px"}}
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="navItemss"
                className="nav-link"
                style={{ fontSize: "20px"}}
                to="/FindaPet"
              >
                Find a Pet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                id="navItemss"
                className="nav-link"
                style={{ fontSize: "20px"}}
                to="/AvailablePets"
              >
               Available Pets
              </Link>
            </li>
          </ul>
          <div className=" d-flex align-items-center rounded" >
            <Link
              className="nav-link text-white"
              style={{ fontSize: "20px" }}
              to="/FavoritePets"
            >
              {/* <i id="navItemss" className="fa-solid fa-cart-plus text-info"></i> */}
             <p className='bg-info' style={{border:"1px solid #ddd", borderRadius:"30px",padding:"2px 12px",fontWeight:"600",fontSize:"20px",marginTop:"15px"}}>s</p>
            </Link>

            <div className="nav-item dropdown">
              <a
                id="navItemss"
                style={{ fontSize: "25px" }}
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                
              >
                <i className="ri-menu-3-line text-info"></i>
              </a>
              <div className="dropdown-menu bg-dark" style={{marginLeft:"-30px",marginTop:"17px"}}>
                <Link
                  id="navItemss"
                  className="nav-link"
                  style={{ fontSize: "20px"}}
                  to="/AdoptionProcess"
                >
                  AdoptionProcess
                </Link>
                <Link
                  id="navItemss"
                  className="nav-link"
                  style={{ fontSize: "20px"  }}
                  to="/SheltersNearYou"
                >
                  SheltersNearYou
                </Link>
                <Link
                  id="navItemss"
                  className="nav-link"
                  style={{ fontSize: "20px" }}
                  to="/ContactUs"
                >
                  Contact Us
                </Link>
                {!authStatus ? (
                  <Link
                 id="navItemss"
                  className="nav-link"
                  style={{ fontSize: "20px" }}
                  to="/Login"
                >
                 Login <i id="navItemss" className="fa-solid fa-user"></i>
                </Link>
                ) :(<div className="d-flex align-content-center pl-2"><UserLogut /> <i id="navItemss" className="fa-solid fa-user" style={{paddingTop:"14px", fontSize:"20px"}}></i></div>)}
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-white" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>

  )
}

export default Header
