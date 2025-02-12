import React from 'react'
import LandingPage from "./HomePages/LandingPage.jsx"
import ReviewAdop from "./HomePages/ReviewAdop.jsx"
import BlogPage from "./HomePages/BlogPage.jsx"
import AdoptionProcess from "../AdoptionProcess/AdoptionProcess.jsx"
import TopAdopted from "./HomePages/TopAdopted.jsx"
const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <TopAdopted />
      <AdoptionProcess />
      <ReviewAdop />
      <BlogPage />
    </div>
  )
}

export default HomePage
