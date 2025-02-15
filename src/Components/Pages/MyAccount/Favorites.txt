import React from "react";
import "../MyAccount/PetsList.css";

const Favorites = ({ favorites, setFavorites }) => {
  const removeFavorite = (petId) => {
    const updatedFavorites = favorites.filter((pet) => pet.id !== petId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="pets-container">
      <h2 className="title">Your Favorite Pets</h2>
      {favorites.length === 0 ? (
        <p className="loading">No favorites yet. Click ❤️ to add pets.</p>
      ) : (
        <div className="pets-grid">
          {favorites.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image?.url} alt={pet.name} className="pet-image" />
              <h3 className="pet-name">{pet.name}</h3>
              <button className="fav-btn remove-btn" onClick={() => removeFavorite(pet.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;