import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import img from "./petsDon.png"
import Logo from "..//..//..//..//../src/Components/Pages/HomePage/HomePages/Logo/Logo.jsx"

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://img.freepik.com/free-photo/adorable-looking-kitten-with-dog_23-2150886504.jpg?t=st=1738612782~exp=1738616382~hmac=3002b5530beda3e66d5d323676b1b38293492135a83ecde8ca7601e6101a6cbb&w=996",
    "https://img.freepik.com/free-photo/view-cats-dogs-showing-friendship_23-2151806303.jpg?t=st=1738612873~exp=1738616473~hmac=35214cf7a655a0cd7dd57222cac978e25ed8ccc754ed1db173d050f3676bb9bd&w=1060",
    "https://img.freepik.com/free-photo/3d-portrait-happy-friends_23-2150793807.jpg?t=st=1738140546~exp=1738144146~hmac=90e8e05f401b2c108e64a92da98bb2f04f575337614a08aca7cd354c4869148d&w=1060",
    "https://img.freepik.com/free-photo/full-shot-girl-with-dog-outdoors_23-2151061850.jpg?t=st=1738140575~exp=1738144175~hmac=abc442247dfd5738e6d8204056b176f8f454a673edb82f479219804a487a2971&w=996"
  
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current slide index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div style={{paddingTop:"90px",minHeight:"120vh"} }>
      <h1
        style={{
          height: "90vh",
          width: "100%",
          position: "absolute",
          zIndex: "999",
          backgroundColor: "#021a1e25",
          paddingTop: "70vh",
          fontSize: "5vh",
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          paddingLeft: "20px",
          textAlign:"center"
        }}
      >
        Find your new best friend
        <span style={{fontSize:"1vw"}}>Browse pets from our network of over 14,500 shelters and rescues.</span>
        <Link style={{textDecoration:"none"}} to="/FindaPet"><div style={{padding:"20px 0px" ,display:"flex" ,alignItems:"center" ,justifyContent:"center"}}>
        <input style={{width:"20vw" ,borderRadius:"5px 0px 0px 5px",backgroundColor:"#fff",border:"none" ,fontWeight:"300" ,padding:"4px" }} type="search" placeholder="Find your pets" />
        <i style={{backgroundColor:"gray" ,padding:"9px 10px" ,borderRadius:"0px 10px 10px 0px",color:"#fff",marginBottom:"14px"}} className="fa-solid fa-magnifying-glass"></i>
        </div></Link>
        {/* <SearchInput /> */}
      </h1>
      <div style={{ height: "90vh", width: "100%" }} className="slideshow2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide2 ${index === currentIndex ? "active2" : ""}`}
          >
            {/* {slide} Replace this with actual content or images */}
            <img
              style={{
                height: "100vh",
                width: "100%",
                objectFit: "cover",
              }}
              src={slide}
              alt="imgs"
            />
          </div>
        ))}
      </div>
      

{/* addtinal  */}
      <div>
        <div className="page1" style={{minHeight:"100vh" ,backgroundColor:"#dddd"}}>
          <h1 style={{paddingTop:"100px" ,color:"#111", display:"flex", alignItems:"center" ,justifyContent:"center" ,marginLeft:"400px"}}>Your Pet Adoption Journey With <span><Logo /></span> </h1>
          <div className="d-flex align-items-start justify-content-around pt-5">
          <div className="card1">
            <img height={700} src={img} alt="" />
          </div>
          <div className="card2" style={{width:"50%"}}>
            <div>
              <h1 className="text-dark">Search Pet</h1>
              <p className="text-dark">Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
            </div>
            <div>
              <h1 className="text-dark">Connect</h1>
              <p className="text-dark">Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
            </div>
            <div>
              <h1 className="text-dark">AdoptLove</h1>
              <p className="text-dark">The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
            </div>
            <div>
              <h1 className="text-dark">Free Vet Consultation</h1>
              <p className="text-dark">ThePetNest will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.</p>
            </div>
          </div>
          </div>
        </div>


        <div style={{width:"100%" ,height:"110vh" , display:"flex" ,alignItems:"center" ,justifyContent:"center"}}>
      {/* <video style={{height:"100vh" , width:"95%", objectFit:"cover"}} autoPlay muted loop src={video}></video> */}
      <div style={{display:"flex" ,alignItems:"center" ,flexDirection:"column" ,justifyContent:"space-evenly"}}>
        <h1 style={{textTransform:"capitalize" ,textAlign:"center" ,fontSize:"3vw",paddingBottom:"20px"}}>the organization goals </h1>
        <p style={{textAlign:"center" ,fontSize:"1.2vw",width:"70%"}}> We are a passionate group of animal lovers dedicated to giving pets a
          second chance. Our mission is to connect loving homes with pets in
          need of adoption. With years of experience in animal rescue, we ensure
          that each pet receives the best care, love, and attention during their
          time with us.</p>
      </div>
      <iframe style={{padding:"50px",borderRadius:"100px"}} width="120%" height="70%" src="https://www.youtube.com/embed/Qpn1TE1AUAM?si=-pDpY-3keafbx7dU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

        <div className="page2" style={{minHeight:"50vh" ,paddingTop:"100px" }}>
          <h1 className="text-center pb-5" >How it works?</h1>
          <div className="card3 d-flex align-items-center justify-content-center" style={{gap:"20px"}}>
            <div className="d-flex align-items-center flex-column">
            <i class="fa-solid fa-magnifying-glass" style={{fontSize:"50px",color:"orange"}}></i>
            <h1>Search</h1>
            <p>Simply enter your city start your search</p>
            </div>
            <div className="d-flex align-items-center flex-column">
            <i className="fa-solid fa-handshake" style={{fontSize:"50px" ,color:"orange"}}></i>
            <h1>Meet</h1>
            <p>Schedule your appointment to meet the pet you love</p>
            </div>
            <div className="d-flex align-items-center flex-column">
              <img height={40} style={{borderRadius:"100px"}} src="https://img.freepik.com/free-vector/adopt-pet-illustration-theme_23-2148539293.jpg" alt="" />
            <h1>Adopt</h1>
            <p>Finnaly adopt the dog or cat you love</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
