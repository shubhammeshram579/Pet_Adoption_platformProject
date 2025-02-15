import React, { useEffect, useState } from "react";
import axios from "axios";
import "../MyAccount/PetsList.css";

const DOG_API_URL = "https://api.thedogapi.com/v1/breeds";
const DOG_API_KEY = "live_BE0zxldUzMdCAhMiqo5SRwU9r2yAJrjzEj4W9NtCUft4cIoy3Yn3p5gJFlCdq2so";

const CAT_API_URL = "https://api.thecatapi.com/v1/breeds";
const CAT_API_KEY = "live_n4wDXppPC4L8RUH4t8m1l7LiJ6DInRa2BWMwIC1duiONZomD6Ev7XeLvNBLnK6HH";

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (pet) => {
    let updatedFavorites;
    if (favorites.some((fav) => fav.id === pet.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== pet.id);
    } else {
      updatedFavorites = [...favorites, pet];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="pets-container">
      <h2 className="title">Available Pets</h2>
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
                  <span className="heart-icon">🖤</span> 
                )}
              </div>

              <img src={pet.image?.url} alt={pet.name} className="pet-image" />
              <h3 className="pet-name">{pet.name}</h3>
              <p><strong>Breed Group:</strong> {pet.breed_group || "N/A"}</p>
              <p><strong>Weight:</strong> {pet.weight?.metric || "Unknown"} kg</p>
              <p><strong>Life Span:</strong> {pet.life_span}</p>
              <p><strong>Temperament:</strong> {pet.temperament}</p>
              <button className="adopt-btn" onClick={() => setSelectedPet(pet)}>Adopt Me</button>
            </div>
          ))}
        </div>
      )}

      {/* Adoption Form Modal */}
      {selectedPet && (
        <div className="overlay">
          <div className="adoption-form">
            <h2>Adopt {selectedPet.name}</h2>
            <form>
              <label>Full Name:</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Phone:</label>
              <input type="tel" placeholder="Enter your phone number" required />

              <label>Why do you want to adopt {selectedPet.name}?</label>
              <textarea placeholder="Write a short reason..." required></textarea><br></br>

              <button type="submit" className="submit-btn">Submit Application</button><br></br><br></br>
              <button type="button" className="close-btn" onClick={() => setSelectedPet(null)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetsList;