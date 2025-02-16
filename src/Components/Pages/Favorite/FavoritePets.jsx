import React, { useCallback, useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {removefavorites} from "..//..//../ReduxSrore/AuthSlice.js"
import {removeCard} from "..//..//../ReduxSrore/AuthSlice.js"


const FavoritePets = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user);
    const favorites = useSelector((state) => state.auth.favorites);
    const addfavorites = useSelector((state) => state.auth.cards);



    const HandelClick = (id)  => {
      dispatch(removeCard(id))

  }

    const HandelClick2 = (id)  => {
        dispatch(removefavorites(id))

    }
   


   return (
    <div style={{paddingTop:"200px" }}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px"}}>
          <h1 className='bg-info' style={{display:"flex",alignItems:"center",justifyContent:"center", width:"150px" ,height:"150px",borderRadius:"100px"}}>{user.email[0]}</h1>
          <p>{user.email}</p>
          </div>
      <div className="pets-container">
      
      <h2 className="title pb-5">Your Favorite Pets</h2>

      {favorites.length === 0 ? (
        <p className="loading">No favorites yet. Click ❤️ to add pets.</p>
      ) : (
        <div className="pets-grid">
          {favorites.map((pet,index) => (
            <div key={index} className="pet-card">
              <img style={{objectFit:"cover" ,height:"400px"}} src={pet.image?.url} alt={pet.name} className="pet-image" />
              <h3 className="pet-name">{pet.name}</h3>
              <button className="fav-btn remove-btn bg-info rounded" style={{padding:"10px 50px",border:"none"}} onClick={() => HandelClick2(pet.id)}>
                ❌ Remove
              </button>
            </div>
          ))}

          {addfavorites.map((pets,index) => (
            <div key={pets.id} className="pet-card">
              <img style={{objectFit:"cover" ,height:"400px"}} src={pets.image?.url} alt={pets.name} className="pet-image" />
              <h3 className="pet-name">{pets.name}</h3>
              <button className="fav-btn remove-btn bg-info rounded" style={{padding:"10px 50px",border:"none"}} onClick={() => HandelClick(pets.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

export default FavoritePets
