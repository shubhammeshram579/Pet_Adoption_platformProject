import {createSlice} from "@reduxjs/toolkit"


const initialState ={
    isLoggedIn :false,
    isAdminLoggedIn :false,
    admin:null,
    user: null,
    cards: [],
    favorites: [],
    SheltersCard: [],
    SheltersCard2: [],
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        Adminlogin:(state,action) => {
            state.isAdminLoggedIn = true;
            state.admin = action.payload;
        },
        login:(state,action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAdminLoggedIn = false;
            state.isLoggedIn = false;
            state.admin = null;
            state.user = null;
        },
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
        removeCard: (state, action) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        addfavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        removefavorites: (state, action) => {
            state.favorites = state.favorites.filter((pet) => pet.id !== action.payload);
        },
        addShelters: (state, action) => {
            state.SheltersCard.push(action.payload);
        },
        addShelters2: (state, action) => {
            state.SheltersCard2.push(action.payload);
        },
    }
})

export const {Adminlogin,login,logout,addCard, removeCard,addShelters,addfavorites,addShelters2,removefavorites} = authSlice.actions;
export default authSlice.reducer;