import React, { useState, useEffect, useContext } from "react";
import { useParams ,Link} from "react-router-dom";

import DataContex from "../../ContextApi/DataContext.js";
import {useDispatch} from "react-redux"
import {addCard} from "..//..//../ReduxSrore/AuthSlice.js"
import { useNavigate } from "react-router-dom";

const PetById = () => {
  const { petsData,homeData } = useContext(DataContex);

  const { petId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

 
  const dispatch  = useDispatch();
  const navigate = useNavigate()

  /* const PetLists = [
    { 
      id:31,
      name: "French Bulldog", 
      adoptionRate: "High", 
      price: "$1,500 - $3,000", 
      description: "Affectionate and great for apartment living.", 
      image: "https://example.com/french_bulldog.jpg" 
    },
    { 
      id:32,
      name: "Pomeranian", 
      adoptionRate: "High", 
      price: "$500 - $2,000", 
      description: "Fluffy, playful, and highly energetic.", 
      image: "https://example.com/pomeranian.jpg" 
    },
    { 
      id:33,
      name: "Dachshund", 
      adoptionRate: "Moderate", 
      price: "$400 - $1,500", 
      description: "Loyal and brave, known for their long body.", 
      image: "https://example.com/dachshund.jpg" 
    },
    { 
      id:34,
      name: "Chihuahua", 
      adoptionRate: "High", 
      price: "$300 - $1,200", 
      description: "Tiny, confident, and very loyal to their owners.", 
      image: "https://example.com/chihuahua.jpg" 
    },
    { 
      id:35,
      name: "Shih Tzu", 
      adoptionRate: "Moderate", 
      price: "$500 - $2,500", 
      description: "Friendly and loving lap dogs with long coats.", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1E-2rXzg1T5q1aD-Yfa_qdx1TEaENSRVK0p6savGYdUOAUETEw4gv9GVkoHFPF5wWOA&usqp=CAU" 
    },
    // apple
    { 
      id:26,
      name: "Labrador Retriever", 
      adoptionRate: "High", 
      price: "$500 - $2,000", 
      description: "Friendly, intelligent, and great with families.", 
      image: "https://example.com/labrador.jpg" 
    },
    { 
      id:27,
      name: "Golden Retriever", 
      adoptionRate: "High", 
      price: "$700 - $2,500", 
      description: "Loyal, affectionate, and easy to train.", 
      image: "https://example.com/golden_retriever.jpg" 
    },
    { 

      id:28,
      name: "German Shepherd", 
      adoptionRate: "High", 
      price: "$500 - $2,000", 
      description: "Intelligent, protective, and great for training.", 
      image: "https://example.com/german_shepherd.jpg" 
    },
    { 
      id:29,
      name: "Rottweiler", 
      adoptionRate: "Moderate", 
      price: "$1,000 - $3,000", 
      description: "Strong, loyal, and protective guard dogs.", 
      image: "https://example.com/rottweiler.jpg" 
    },
    { 
      id:30,
      name: "Siberian Husky", 
      adoptionRate: "Moderate", 
      price: "$600 - $2,000", 
      description: "Energetic, intelligent, and needs cold weather.", 
      image: "https://example.com/siberian_husky.jpg" 
    },
        // sumsung
        { 
          id:21,
          name: "Domestic Shorthair", 
          adoptionRate: "High", 
          price: "$50 - $200", 
          description: "Friendly and commonly found in shelters.", 
          image: "https://example.com/domestic_shorthair.jpg" 
        },
        { 
          id:22,
          name: "Siamese", 
          adoptionRate: "High", 
          price: "$400 - $1,500", 
          description: "Vocal and affectionate with striking blue eyes.", 
          image: "https://example.com/siamese.jpg" 
        },
        { 
          id:23,
          name: "Bengal", 
          adoptionRate: "Moderate", 
          price: "$1,000 - $4,000", 
          description: "Active, intelligent, and leopard-like appearance.", 
          image: "https://example.com/bengal.jpg" 
        },
        { 
          id:24,
          name: "British Shorthair", 
          adoptionRate: "Moderate", 
          price: "$1,200 - $2,500", 
          description: "Calm, affectionate, and known for their round face.", 
          image: "https://example.com/british_shorthair.jpg" 
        },
        { 
          id:25,
          name: "Abyssinian", 
          adoptionRate: "Moderate", 
          price: "$500 - $1,500", 
          description: "Highly active and loves climbing and exploring.", 
          image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8nFGvDCWObaRih54cwNOzJikHlaJdPELNsIyB1dF_H_XM4ex3wkFEb5b0oQrScxwFoURbPSlS0SaZRagRm_MNbg" 
        },
        // Oppo
        { 
          id:16,
          name: "Maine Coon", 
          adoptionRate: "High", 
          price: "$800 - $2,500", 
          description: "Large, fluffy, and affectionate companions.", 
          image: "https://example.com/maine_coon.jpg" 
        },
        { 
          id:17,
          name: "Ragdoll", 
          adoptionRate: "Moderate", 
          price: "$800 - $3,000", 
          description: "Gentle and known for their floppy, relaxed nature.", 
          image: "https://example.com/ragdoll.jpg" 
        },
        { 
          id:18,
          name: "Persian", 
          adoptionRate: "Moderate", 
          price: "$1,000 - $3,500", 
          description: "Elegant, calm, and needs regular grooming.", 
          image: "https://example.com/persian.jpg" 
        },
        { 
          id:19,
          name: "Norwegian Forest Cat", 
          adoptionRate: "Moderate", 
          price: "$600 - $1,500", 
          description: "Loves climbing and has a thick, waterproof coat.", 
          image: "https://example.com/norwegian_forest.jpg" 
        },
        { 
          id:20,
          name: "Himalayan", 
          adoptionRate: "Moderate", 
          price: "$800 - $2,500", 
          description: "Beautiful long fur with a Siamese-like face.", 
          image: "https://example.com/himalayan.jpg" 
        },
        // vivo
        { 
          id:11,
          name: "Poodle (Dog)", 
          adoptionRate: "Moderate", 
          price: "$1,000 - $3,000", 
          description: "Smart and hypoallergenic with curly coats.", 
          image: "https://example.com/poodle.jpg" 
        },
        { 
          id:12,
          name: "Portuguese Water Dog (Dog)", 
          adoptionRate: "Moderate", 
          price: "$2,000 - $4,000", 
          description: "Energetic and great for active families.", 
          image: "https://example.com/portuguese_water_dog.jpg" 
        },
        { 
          id:13,
          name: "Devon Rex (Cat)", 
          adoptionRate: "Moderate", 
          price: "$1,000 - $2,500", 
          description: "Playful and intelligent with a curly coat.", 
          image: "https://example.com/devon_rex.jpg" 
        },
        { 
          id:14,
          name: "Sphynx (Cat)", 
          adoptionRate: "Moderate", 
          price: "$1,500 - $3,500", 
          description: "Hairless and affectionate, requires skin care.", 
          image: "https://example.com/sphynx.jpg" 
        },
        { 
          id:15,
          name: "Balinese (Cat)", 
          adoptionRate: "Moderate", 
          price: "$600 - $2,000", 
          description: "Elegant and hypoallergenic with long fur.", 
          image: "https://example.com/balinese.jpg" 
        },
        // populer pets
        
          // Dogs
          { 
            id:1,
            rank: 1, 
            type: "Dog",
            name: "Labrador Retriever", 
            adoptionRate: "High", 
            price: "$500 - $2,000", 
            description: "Friendly, intelligent, and great for families. Labradors are one of the most popular dog breeds worldwide.", 
            image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/labrador-retriever-dog-breed-info.jpeg" 
          },
          { 
            id:2,
            rank: 2, 
            type: "Dog",
            name: "French Bulldog", 
            adoptionRate: "High", 
            price: "$1,500 - $3,000", 
            description: "Small, affectionate, and great for apartment living. French Bulldogs are highly sought after.", 
            image: "https://example.com/french_bulldog.jpg" 
          },
          { 
            id:3,
            rank: 3, 
            type: "Dog",
            name: "Golden Retriever", 
            adoptionRate: "High", 
            price: "$700 - $2,500", 
            description: "Loyal, intelligent, and great with children. Golden Retrievers are known for their friendly nature.", 
            image: "https://example.com/golden_retriever.jpg" 
          },
          { 
            id:4,
            rank: 4, 
            type: "Dog",
            name: "German Shepherd", 
            adoptionRate: "High", 
            price: "$500 - $2,000", 
            description: "Highly trainable, protective, and intelligent. German Shepherds are often used in police and service work.", 
            image: "https://example.com/german_shepherd.jpg" 
          },
          { 
            id:5,
            rank: 5, 
            type: "Dog",
            name: "Bulldog", 
            adoptionRate: "Moderate", 
            price: "$1,000 - $4,000", 
            description: "Calm, affectionate, and great for families. Bulldogs have a distinctive wrinkled face and sturdy build.", 
            image: "https://example.com/bulldog.jpg" 
          },
        
          // Cats
          { 
            id:6,
            rank: 6, 
            type: "Cat",
            name: "Domestic Shorthair", 
            adoptionRate: "High", 
            price: "$50 - $200", 
            description: "Friendly, adaptable, and commonly found in shelters. Domestic Shorthairs make great companions.", 
            image: "https://example.com/domestic_shorthair.jpg" 
          },
          { 
            id:7,
            rank: 7, 
            type: "Cat",
            name: "Maine Coon", 
            adoptionRate: "High", 
            price: "$800 - $2,500", 
            description: "Large, fluffy, and affectionate. Maine Coons are one of the largest domesticated cat breeds.", 
            image: "https://example.com/maine_coon.jpg" 
          },
          { 
            id:8,
            rank: 8, 
            type: "Cat",
            name: "Siamese", 
            adoptionRate: "High", 
            price: "$400 - $1,500", 
            description: "Vocal, affectionate, and striking in appearance. Siamese cats are known for their blue eyes and sleek coats.", 
            image: "https://example.com/siamese.jpg" 
          },
          { 
            id:9,
            rank: 9, 
            type: "Cat",
            name: "Ragdoll", 
            adoptionRate: "Moderate", 
            price: "$800 - $3,000", 
            description: "Gentle, affectionate, and known for their floppy nature when picked up. Ragdolls love human attention.", 
            image: "https://example.com/ragdoll.jpg" 
          },
          { 
            id:10,
            rank: 10, 
            type: "Cat",
            name: "Bengal", 
            adoptionRate: "Moderate", 
            price: "$1,000 - $4,000", 
            description: "Active, intelligent, and known for their leopard-like spots. Bengals require a lot of stimulation.", 
            image: "https://example.com/bengal.jpg" 
          }
        
  ]; */

  useEffect(() => {
    const SingleProductFatch = async () => {
      try {
        const product = await homeData.find((p) => p.id === parseInt(petId));
        setSingleProduct(product);
      } catch (error) {
        console.log(error.message || "fatching data error");
      }
    };
    SingleProductFatch();
  }, [petId]);


  // handel addcard butten
  const handelDeispach = () => {
    dispatch(addCard(singleProduct))
    navigate("/FavoritePets")

  }

  console.log(singleProduct)

  return (
    <>
      <div
        style={{
          paddingTop: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        {singleProduct ? (
          <div
            key={singleProduct.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              // backgroundColor:"blue",
              gap: "100px",
            }}
          >
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  height: "67vh",
                  width: "29vw",
                  overflow: "hidden",
                }}
              >
                <img
                  src={singleProduct.image?.url}
                  alt={singleProduct.name}
                  style={{ width: "29vw", height: "70vh", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
               <button onClick={handelDeispach} className="bg-info rounded-pill px-4 border-0 py-2">favorite</button>
                <Link to={`/AdoptionPayment/${singleProduct.id}`}><button className="bg-warning px-4 rounded-pill border-0 py-2">AdoptNow</button></Link>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                flexDirection: "column",
                // backgroundColor:"blue",
                width: "50%",
              }}
            >
              <p style={{ fontSize: "3vw" }}>{singleProduct.name}</p>
              <div style={{ display: "flex", flexDirection:"column", gap: "1px" }}>
                {/* <p>Name: {singleProduct.name}</p> */}
                <p><b>Age:</b> {singleProduct.age}</p>
                <p><b>Size:</b> {singleProduct.size}</p>
                <p><b>Price: ₹</b> {singleProduct.price}</p>
                <p><b>adoptionRate:</b> {singleProduct.adoptionRate}</p>
                <p><b>Rating:</b> {singleProduct.rank}⭐</p>
              </div>
              <p style={{ width: "80%" }}>{singleProduct.description}</p>
              <p style={{width:"80%"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                totam aspernatur. Enim labore laboriosam, ullam vitae eius id
                beatae eum ad ipsa aliquid? Delectus voluptate eius doloremque
                recusandae officia reprehenderit veritatis iste tempora tenetur
                dolores ipsa vel quo ab ad molestias, animi eaque debitis illum!
                Deleniti fugiat perferendis quam dicta doloribus. Provident
                facilis aut vel, accusamus temporibus rerum explicabo aliquam
                nobis eligendi aperiam perspiciatis inventore tenetur. Earum a
                cupiditate aspernatur repudiandae excepturi quasi reiciendis
                officiis laudantium laborum quia optio qui tempore eum beatae
                saepe fugiat, culpa minus voluptas iste inventore itaque
                perspiciatis in! Beatae asperiores repellendus quis possimus
                ullam iusto!
              </p>
            </div>

          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
};

export default PetById;
