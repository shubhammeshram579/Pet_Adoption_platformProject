import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import HomePage from "../src/Components/Pages/HomePage/HomePage.jsx"
import AvailablePets from "../src/Components/Pages/AvailablePets/AvailablePets.jsx"
import AdoptionProcess from "../src/Components/Pages/AdoptionProcess/AdoptionProcess.jsx"
import ShelterPage from "../src/Components/Pages/ShelterPage/ShelterPage.jsx"
import ContactUs from "../src/Components/Pages/ContractUs/ContactUs.jsx"
import MyAccount from "../src/Components/Pages/MyAccount/MyAccount.jsx"
import Favorites from "../src/Components/Pages/MyAccount/Favorites.jsx"
import FindPets from "../src/Components/Pages/FindPets/FindPets.jsx"
import Header from "../src/Components/Header/Header.jsx"
import Footer from "../src/Components/Footer/Footer.jsx"

function App() {


  return (
  
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/FindaPet' element={<FindPets />} />
        <Route path='/AvailablePets' element={<AvailablePets />} />
        <Route path='/AdoptionProcess' element={<AdoptionProcess />} />
        <Route path='/SheltersNearYou' element={<ShelterPage />} />
        <Route path='/MyAccount' element={<MyAccount />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        {/* <Route path='/Favorate' element={<Favorites />} /> */}
      </Routes>
      <Footer />
      </BrowserRouter>
  )
}

export default App
