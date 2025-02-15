import React, { useEffect, useState } from "react";
import "..//..//..//../App.css";

import { motion } from "motion/react"

const ReviewAdop = () => {
  const [review, setReview] = useState([]);

  const AdoptedParentReviews = [
    {
      id: 1,
      name: "Ananya Sharma",
      date: "2023-05-14",
      rating: 4.8,
      stars: "⭐⭐⭐⭐⭐",
      image: "https://cupabangalore.org/wp-content/uploads/2022/12/Second-Chance-Adoption-Centre-05.jpg",
      description: "Adopting Bruno has been the best decision. He’s brought so much joy and love to our family."
    },
    {
      id: 2,
      name: "Rohan Deshmukh",
      date: "2022-11-20",
      rating: 4.5,
      stars: "⭐⭐⭐⭐⭐",
      image: "https://media.gettyimages.com/id/1308849167/photo/man-cuddling-and-holding-his-pet-dog-in-his-hands.jpg?s=612x612&w=gi&k=20&c=QlNw3JqJLf-UBSoGXdL69LdwXp1tUj_cFi0VDL9DX9o=",
      description: "Lucy is an adorable companion. The adoption process was smooth and hassle-free!"
    },
    {
      id: 3,
      name: "Priya Verma",
      date: "2023-02-03",
      rating: 4.7,
      stars: "⭐⭐⭐⭐⭐",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1rXSfPxTnGytkjL9JSnc61XU9fODRgqihg&s",
      description: "Milo is now a part of our family. He’s playful, loving, and makes every day special."
    },
    {
      id: 4,
      name: "Aditya Kulkarni",
      date: "2021-09-15",
      rating: 4.3,
      stars: "⭐⭐⭐⭐",
      image: "https://example.com/images/aditya-kulkarni.jpg",
      description: "Shadow has adjusted well to his new home. Thank you for the support during the adoption."
    },
    {
      id: 5,
      name: "Sanya Patel",
      date: "2022-04-28",
      rating: 4.9,
      stars: "⭐⭐⭐⭐⭐",
      image: "https://example.com/images/sanya-patel.jpg",
      description: "Adopting Coco was life-changing. She’s filled our home with happiness and warmth."
    },
    {
      id: 6,
      name: "Karan Mehra",
      date: "2023-06-10",
      rating: 4.6,
      stars: "⭐⭐⭐⭐⭐",
      image: "https://example.com/images/karan-mehra.jpg",
      description: "Max has become my best friend. The adoption center was very supportive throughout the process."
    },
    {
      id: 7,
      name: "Neha Singh",
      date: "2021-12-01",
      rating: 4.4,
      stars: "⭐⭐⭐⭐",
      image: "https://example.com/images/neha-singh.jpg",
      description: "We adopted Daisy, and she’s the sweetest dog ever! Thank you for making the process easy."
    },
    {
      id: 8,
      name: "Vikram Joshi",
      date: "2022-08-18",
      rating: 4.7,
      stars: "⭐⭐⭐⭐⭐",
      image: "https://example.com/images/vikram-joshi.jpg",
      description: "Charlie has been a bundle of joy since day one. I couldn’t have asked for a better companion."
    },
    {
      id: 9,
      name: "Ishita Rao",
      date: "2023-01-25",
      rating: 4.9,
      stars: "⭐⭐⭐⭐⭐",
      image: "https://example.com/images/ishita-rao.jpg",
      description: "Bella is not just a pet but a family member now. Grateful for the smooth adoption process!"
    },
    {
      id: 10,
      name: "Aarav Malhotra",
      date: "2022-03-11",
      rating: 4.2,
      stars: "⭐⭐⭐⭐",
      image: "https://example.com/images/aarav-malhotra.jpg",
      description: "Leo has brought so much positivity into our lives. The shelter staff were incredibly helpful."
    }
  ];
  

  useEffect(() => {
    setReview(AdoptedParentReviews);
  }, []);

  return (
    <div style={{minHeight:"60vh", padding:"100px 100px"}}>
      <h1 style={{textAlign:"center" ,padding:"20px"}}>Reviews from Our Happy Pet Parents</h1>
      <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.95 }} onHoverStart={() => console.log('hover started!')}  id="ReviewCard" style={{display:"flex" , flexWrap:"nowrap" ,alignItems:"center" ,justifyContent:"space-evenly" , flexDirection:"row",overflow:"scroll" ,gap:"40px"}}>
        {review.map((p, index) => (
          <div>
            <div className="bg-light" key={p.id} style={{display:"flex" , flexWrap:"nowrap" ,alignItems:"start" ,gap:"20px",width:"40vw" ,justifyContent:"space-evenly"}}>
              <div>
                <img height={300} width={200} src={p.image} alt="..." />
              </div>
             
                <div >
                  <h5 >{p.name}</h5>
                  <p>{p.date}</p>
                  <p >Rating: {p.rating}</p>
                  <p style={{ fontSize: "1vw", color: "orange" }}>{p.stars}</p>
                  <p>{p.description}</p>
                  <p>
                    <small className="text-muted">{p.stutus}</small>
                  </p>
                </div>
              
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ReviewAdop;
