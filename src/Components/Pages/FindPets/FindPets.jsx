import React, { useEffect, useState ,useContext } from "react";
import axios from "axios";
import "../AvailablePets/PetsList.css";
// import DataContex from "..//../ContextApi/DataContext.js"
import {useDispatch} from "react-redux"
import {addShelters} from "..//..//../ReduxSrore/AuthSlice.js"
import {addfavorites} from "..//..//../ReduxSrore/AuthSlice.js"
import { useNavigate } from "react-router-dom";


const DOG_API_URL = "https://api.thedogapi.com/v1/breeds";
const DOG_API_KEY = "live_BE0zxldUzMdCAhMiqo5SRwU9r2yAJrjzEj4W9NtCUft4cIoy3Yn3p5gJFlCdq2so";

const CAT_API_URL = "https://api.thecatapi.com/v1/breeds";
const CAT_API_KEY = "live_n4wDXppPC4L8RUH4t8m1l7LiJ6DInRa2BWMwIC1duiONZomD6Ev7XeLvNBLnK6HH";

const FindPets = () => {
// const {petsData} = useContext(DataContex)
  const dispatch  = useDispatch();
  const navigate = useNavigate()
    
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [formData,setFormData] = useState({})
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(true);


  const [product,setProducts] = useState([])
  const [query, setQuery] = useState('');
  const [state ,setState] = useState("");


// console.log(pets)


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



  const toggleFavorite = (pet) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === pet.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== pet.id);
    } else {
      updatedFavorites = [...favorites, pet];
    }

    setFavorites(updatedFavorites);
    // dispatch(addfavorites(updatedFavorites))
  };


  // form handel
    const handelChange = (e) => {
      const {name ,value} = e.target;
      setFormData((values) => ({...values, [name]:value}))
  
    }
  
    const HandelSumbit2 = (e) => {
      e.preventDefault();
      const obj = {info:formData,data:selectedPet}
      setData((values) => ({...values,obj}))
      setFormData({fullname:"",email:"",phone:"",message:""})
      dispatch(addShelters(obj))
      navigate(`/AdoptionPayment/${selectedPet.id}`)
     
    }


// country selection
const LocatinSt = []
pets.forEach((p) => {
  LocatinSt.push(p.origin)
})
const uniStar = [...new Set(LocatinSt)]

  
// filter handelSumbit feature
const HandelSumbit = (e) => {
    e.preventDefault()
    const FatchQury = async () => {
    const regex = new RegExp(query , "i");
  
        const response = await pets.filter((p) => {
            const matchQuery = regex.test(p.name) || regex.test(p.country_code);
            const StateMatch = state ? p.origin === state:true;
            return matchQuery && StateMatch;
           
        })
        setProducts(response)
  
      }
      FatchQury()
  
  };
  
  // filter clean btn
  const ClearnSerach = () => {
    setQuery("")
    setState("")
  }

  return (
    <div>
      {/* filter form */}
    <form  onSubmit={HandelSumbit} style={{backgroundColor:"#dddd",height:"50vh" ,textAlign:"center" ,paddingTop:"140px"}}>
      <h1 style={{color:"#111"}}>Find your pets</h1>
        <div style={{padding:"30px"}}>
        <input style={{padding:"10px", marginRight:"10px" ,width:"20vw"}} type="text" name="name" value={query} placeholder='Search by name,country_code' onChange={(e) => setQuery(e.target.value)} />

        <select style={{padding:"10px 10px" ,marginLeft:"10px"}} name="State" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select country</option>
            {uniStar.map((L,index) => (
              <option key={index} value={L}>
                {L}
              </option>
            ))}
        </select>
        </div>
       
        <button style={{width:"200px" ,paddingBottom:"36px" ,backgroundColor:"#1ab3ca" ,border:"none" , borderRadius:"5px",textAlign:"center"}} type='submit'>Search</button>
        <button style={{width:"200px",padding:"11px 30px" ,backgroundColor:"#1ab3ca" ,border:"none" , borderRadius:"5px" ,marginLeft:"10px"}} onClick={ClearnSerach}>Clear Filter</button>
    
      </form>


      {/* petslist */}
    <div className="pets-container" style={{paddingTop:"100px"}}>
      <h2 className="title">Available Pets</h2>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="pets-grid">
          { product.length > 0 ? (
            product.map((pet) => (
                <div key={pet.id} className="pet-card">
                  {/* Favorite Heart Icon */}
                  <div className="fav-icon" onClick={() => toggleFavorite(pet)}>
                    {favorites.some((fav) => fav.id === pet.id) ? (
                      <span className="heart-icon filled">❤️</span> 
                    ) : (
                      <button style={{backgroundColor:"transparent",border:"none"}} onClick={() =>  dispatch(addfavorites(pet))}  className="heart-icon">🖤</button>
                    )}
                  </div>
    
                  <img src={pet.image?.url} alt={pet.name} className="pet-image" style={{height:"350px",objectFit:"cover"}} />
                  <h3 className="pet-name">{pet.name}</h3>
                  <p><strong>Breed Group:</strong> {pet.breed_group || "N/A"}</p>
                  <p><strong>Weight:</strong> {pet.weight?.metric || "Unknown"} kg</p>
                  <p><strong>Life Span:</strong> {pet.life_span}</p>
                  <p><strong>Temperament:</strong> {pet.temperament}</p>
                  <button className="adopt-btn" onClick={() => setSelectedPet(pet)}>Adopt Me</button>
                </div>
              ))
          ) : (
            pets.map((pet) => (
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
              <button className="adopt-btn" onClick={() => setSelectedPet(pet)}>Adopt Me</button>
            </div>
          )))}
        </div>
      )}

      {/* Adoption Form Modal */}
      {selectedPet && (
        <div className="overlay" >
          <div className="adoption-form" style={{backgroundColor:"#ddd", marginTop:"100px",width:"25%"}}>
            <h3>Adopt {selectedPet.name}</h3>
            <form  onSubmit={HandelSumbit2}>
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

export default FindPets;
