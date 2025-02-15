import React, { useCallback, useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {removefavorites} from "..//..//../ReduxSrore/AuthSlice.js"
import {removeCard} from "..//..//../ReduxSrore/AuthSlice.js"


const FavoritePets = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user);
    const addfavorites = useSelector((state) => state.auth.cards);
    const favorites = useSelector((state) => state.auth.favorites);


    useCallback(() => {
      console.log("hello")
    },[addfavorites,favorites])


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

      {addfavorites.length === 0 ? (
        <p className="loading">No favorites yet. Click ❤️ to add pets.</p>
      ) : (
        <div className="pets-grid">
          {addfavorites.map((pet,index) => (
            <div key={index} className="pet-card">
              <img style={{objectFit:"cover" ,height:"400px"}} src={pet.image?.url} alt={pet.name} className="pet-image" />
              <h3 className="pet-name">{pet.name}</h3>
              <button className="fav-btn remove-btn bg-info rounded" style={{padding:"10px 50px",border:"none"}} onClick={() => HandelClick(pet.id)}>
                ❌ Remove
              </button>
            </div>
          ))}
          {favorites.map((pet,index) => (
            <div key={index} className="pet-card">
              <img style={{objectFit:"cover" ,height:"400px"}} src={pet.image?.url} alt={pet.name} className="pet-image" />
              <h3 className="pet-name">{pet.name}</h3>
              <button className="fav-btn remove-btn bg-info rounded" style={{padding:"10px 50px",border:"none"}} onClick={() => HandelClick2(pet.id)}>
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
