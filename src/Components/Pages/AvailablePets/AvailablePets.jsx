import React, { useEffect, useState } from "react";
import axios from "axios";
import "../AvailablePets/PetsList.css";
import {useDispatch} from "react-redux"
import {addShelters} from "..//..//..//../src/ReduxSrore/AuthSlice.js"
import {addfavorites} from "..//..//..//../src/ReduxSrore/AuthSlice.js"
import { useNavigate } from "react-router-dom";



const DOG_API_URL = "https://api.thedogapi.com/v1/breeds";
const DOG_API_KEY = "live_BE0zxldUzMdCAhMiqo5SRwU9r2yAJrjzEj4W9NtCUft4cIoy3Yn3p5gJFlCdq2so";

const CAT_API_URL = "https://api.thecatapi.com/v1/breeds";
const CAT_API_KEY = "live_n4wDXppPC4L8RUH4t8m1l7LiJ6DInRa2BWMwIC1duiONZomD6Ev7XeLvNBLnK6HH";

const AvailablePets = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate()
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [formData,setFormData] = useState({})
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true);
   
// console.log(selectedPet)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const dogResponse = await axios.get(DOG_API_URL, { headers: { "x-api-key": DOG_API_KEY } });
        const catResponse = await axios.get(CAT_API_URL, { headers: { "x-api-key": CAT_API_KEY } });

        setPets([...dogResponse.data, ...catResponse.data]);
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // console.log(pets)

  // useEffect(() => {
  //   const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  //   setFavorites(storedFavorites);
  // }, []);


  const toggleFavorite = (pet) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === pet.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== pet.id);
      
    } else {
      updatedFavorites = [...favorites, pet];
      // LocatinSt.push(updatedFavorites)
    }

    setFavorites(updatedFavorites);
    // dispatch(addfavorites(pet))
    // localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };


  // form handel
  const handelChange = (e) => {
    const {name ,value} = e.target;
    setFormData((values) => ({...values, [name]:value}))

  }

  const HandelSumbit = (e) => {
    e.preventDefault();
    const obj = {info:formData,data:selectedPet}
    setData((values) => ({...values,obj}))
    setFormData({fullname:"",email:"",phone:"",message:""})
    dispatch(addShelters(obj))
    navigate(`/AdoptionPayment/${selectedPet.id}`)
   
  }

  return (
    <div>
      <div style={{display:"flex" ,alignItems:"center", justifyContent:"center"}}>
      <img style={{height:"65vh",paddingTop:"100px" ,width:"100%" ,objectFit:"cover",marginTop:"-10px"}} src="https://img.freepik.com/free-vector/hand-drawn-pet-sitting-facebook-template_23-2149603625.jpg?t=st=1739537402~exp=1739541002~hmac=d06ae25cafa6f638bbbb9612417b6f0b1c46decedc261fabe985e49bcd9c2cf5&w=1060" alt="" />
      </div>
    <div className="pets-container" style={{paddingTop:"100px"}}>
      <h2 className="title" style={{paddingBottom:"50px"}}>Available Pets</h2>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pets-grid">
          {pets.map((pet) => (
            <div key={pet.id} className="pet-card">
              {/* Favorite Heart Icon */}
              <div className="fav-icon" onClick={() => toggleFavorite(pet)}>
                {favorites.some((fav) => fav.id === pet.id) ? (
                  <span className="heart-icon filled">❤️</span>
                ) : (
                  <button style={{backgroundColor:"transparent",border:"none"}} onClick={() =>  dispatch(addfavorites(pet))}  className="heart-icon">🖤</button>
                )}
              </div>

              <img src={pet.image?.url} alt={pet.name} className="pet-image"  style={{height:"350px",objectFit:"cover"}}/>
              <h3 className="pet-name">{pet.name}</h3>
              <p><strong>Breed Group:</strong> {pet.breed_group || "N/A"}</p>
              <p><strong>Weight:</strong> {pet.weight?.metric || "Unknown"} kg</p>
              <p><strong>Life Span:</strong> {pet.life_span}</p>
              <p><strong>Temperament:</strong> {pet.temperament}</p>
              <button className="adopt-btn " onClick={() => setSelectedPet(pet)}>Adopt Me</button>
            </div>
          ))}
        </div>
      )}

      {/* Adoption Form Modal */}
      {selectedPet && (
        <div className="overlay">
          <div className="adoption-form" style={{backgroundColor:"#ddd", marginTop:"100px",width:"25%"}}>
            <h3>Adopt {selectedPet.name}</h3>
            <form  onSubmit={HandelSumbit}>
              <label>Full Name:</label>
              <input type="text" name="fullname" value={formData.fullname} onChange={handelChange} placeholder="Enter your name" required />

              <label>Email:</label>
              <input type="email"  name="email" value={formData.email} onChange={handelChange} placeholder="Enter your email" required />

              <label>Phone:</label>
              <input type="number"  name="phone" value={formData.phone} onChange={handelChange} placeholder="Enter your phone number" required />

              <label>Address:</label>
              <input type="text"  name="address" value={formData.address} onChange={handelChange} placeholder="Enter your adderes" required />

              <label>Why do you want to adopt {selectedPet.name}?</label>
              <textarea name="message" value={formData.message} onChange={handelChange} placeholder="Write a short reason..." required></textarea><br></br>

              <button type="submit" className="submit-btn w-100">Submit Application</button><br></br><br></br>
              <button type="button" className="close-btn w-100" onClick={() => setSelectedPet(null)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AvailablePets;
