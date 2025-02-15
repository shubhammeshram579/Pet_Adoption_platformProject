import './App.css'

import DataContexProvider from "./Components/ContextApi/DataContexProvider.jsx"
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import HomePage from "../src/Components/Pages/HomePage/HomePage.jsx"
import AvailablePets from "../src/Components/Pages/AvailablePets/AvailablePets.jsx"
import AdoptionProcess from "../src/Components/Pages/AdoptionProcess/AdoptionProcess.jsx"
import ShelterPage from "../src/Components/Pages/ShelterPage/ShelterPage.jsx"
import ContactUs from "../src/Components/Pages/ContractUs/ContactUs.jsx"
import MyAccount from "../src/Components/Pages/MyAccount/MyAccount.jsx"
// import Favorites from "../src/Components/Pages/MyAccount/Favorites.jsx"
import FindPets from "../src/Components/Pages/FindPets/FindPets.jsx"
import Header from "../src/Components/Header/Header.jsx"
import Footer from "../src/Components/Footer/Footer.jsx"
import PetById from "./Components/Pages/PetById/PetById.jsx"
import AdoptionPayment from "./Components/Pages/PetById/AdoptionPayment.jsx"
import FavoritePets from "./Components/Pages/Favorite/FavoritePets.jsx"


import UserLogin from "./Components/User/UserLogin.jsx";
import UserRegister from "./Components/User/UserRegister.jsx"

import { useSelector } from 'react-redux'

function App() {
  const authStatus =  useSelector((state) => state.auth.isLoggedIn)


  return (
  
    <DataContexProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/FindaPet' element={authStatus ? (<FindPets />) : (<UserLogin />) } />
        <Route path='/AvailablePets' element={authStatus ? (<AvailablePets />) : (<UserLogin />)} />
        <Route path='/AdoptionProcess' element={ authStatus ? (<AdoptionProcess />): (<UserLogin />)} />
        <Route path='/SheltersNearYou' element={authStatus ? ( <ShelterPage />): (<UserLogin />)} />
        <Route path='/MyAccount' element={authStatus ? ( <MyAccount /> ): (<UserLogin />)} />
        <Route path='/ContactUs' element={authStatus ? ( <ContactUs />): (<UserLogin />)} />
        <Route path='/PetById/:petId' element={authStatus ? ( <PetById />): (<UserLogin />)} />
        <Route path='/AdoptionPayment/:petId' element={authStatus ? ( <AdoptionPayment />): (<UserLogin />)} />
        <Route path='/FavoritePets' element={authStatus ? ( <FavoritePets />): (<UserLogin />)} />

        <Route path='/Register' element={<UserRegister/>} />
        <Route path='/Login' element={<UserLogin/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      </DataContexProvider>
  )
}

export default App
