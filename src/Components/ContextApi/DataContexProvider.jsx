import React, { useEffect, useState }  from 'react'
import DataContex from "./DataContext.js"
import axios from 'axios'



const DOG_API_URL = "https://api.thedogapi.com/v1/breeds";
const DOG_API_KEY = "live_BE0zxldUzMdCAhMiqo5SRwU9r2yAJrjzEj4W9NtCUft4cIoy3Yn3p5gJFlCdq2so";

const CAT_API_URL = "https://api.thecatapi.com/v1/breeds";
const CAT_API_KEY = "live_n4wDXppPC4L8RUH4t8m1l7LiJ6DInRa2BWMwIC1duiONZomD6Ev7XeLvNBLnK6HH";



const DataContexProvider = ({children}) => {
    const [petsData ,setPetsData] = useState([])
    const [homeData,setHomeData] = useState([])


    const mostAdoptedPets = [
        // Dogs
        { 
          id:501,
          rank: 1, 
          type: "Dog",
          size: "Large", 
          age: "Adult",
          name: "Labrador Retriever", 
          adoptionRate: "High", 
          price: 2000, 
          description: "Friendly, intelligent, and great for families. Labradors are one of the most popular dog breeds worldwide.", 
          image: {url:"https://image.petmd.com/files/styles/863x625/public/2024-11/labrador-retriever.jpg"} 
        },
        { 
          id:502,
          rank: 2, 
          type: "Dog",
          name: "French Bulldog", 
          size: "Medium", 
          age: "Adult", 
          adoptionRate: "High", 
          price: 3000, 
          description: "Small, affectionate, and great for apartment living. French Bulldogs are highly sought after.", 
          image: {url:"https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg" }
        },
        { 
          id:503,
          rank: 3, 
          type: "Dog",
          size: "Large",
          age: "Adult", 
          name: "Golden Retriever", 
          adoptionRate: "High", 
          price: 2500, 
          description: "Loyal, intelligent, and great with children. Golden Retrievers are known for their friendly nature.", 
          image: {url:"https://heronscrossing.vet/wp-content/uploads/Golden-Retriever.jpg" }
        },
        // { 
        //   id:4,
        //   rank: 4, 
        //   type: "Dog",
        //   name: "German Shepherd", 
        //   adoptionRate: "High", 
        //   price: "$500 - $2,000", 
        //   description: "Highly trainable, protective, and intelligent. German Shepherds are often used in police and service work.", 
        //   image: "https://example.com/german_shepherd.jpg" 
        // },
        // { 
        //   id:5,
        //   rank: 5, 
        //   type: "Dog",
        //   name: "Bulldog", 
        //   adoptionRate: "Moderate", 
        //   price: "$1,000 - $4,000", 
        //   description: "Calm, affectionate, and great for families. Bulldogs have a distinctive wrinkled face and sturdy build.", 
        //   image: "https://cdn.britannica.com/08/234208-050-C9A21C4C/English-bulldog-dog.jpg" 
        // },
      
        // // Cats
        // { 
        //   id:6,
        //   rank: 6, 
        //   type: "Cat",
        //   name: "Domestic Shorthair", 
        //   adoptionRate: "High", 
        //   price: "$50 - $200", 
        //   description: "Friendly, adaptable, and commonly found in shelters. Domestic Shorthairs make great companions.", 
        //   image: "https://www.trupanion.com/images/trupanionwebsitelibraries/pet-blogs/domestic-shorthair-cat-blanket-1-.jpg?sfvrsn=f7134fc_6" 
        // },
        // { 
        //   id:7,
        //   rank: 7, 
        //   type: "Cat",
        //   name: "Maine Coon", 
        //   adoptionRate: "High", 
        //   price: "$800 - $2,500", 
        //   description: "Large, fluffy, and affectionate. Maine Coons are one of the largest domesticated cat breeds.", 
        //   image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-cat-breed.jpg" 
        // },
        { 
          id:508,
          rank: 8, 
          type: "Cat",
          name: "Siamese",
          size: "Medium", 
          age: "Adult",  
          adoptionRate: "High", 
          price: 1500, 
          description: "Vocal, affectionate, and striking in appearance. Siamese cats are known for their blue eyes and sleek coats.", 
          image: {url:"https://www.catster.com/wp-content/uploads/2023/11/Siamese-Cat_Andreas-LischkaPixabay.jpg" }
        },
        { 
          id:509,
          rank: 9, 
          type: "Cat",
          size: "Large", 
          age: "Adult", 
          name: "Ragdoll", 
          adoptionRate: "Moderate", 
          price: 3000, 
          description: "Gentle, affectionate, and known for their floppy nature when picked up. Ragdolls love human attention.", 
          image: {url:"https://cfa.org/wp-content/uploads/2024/06/2024-c23c-ZeusRagdollXiaoYao-1024x768.webp" }
        },
        { 
          id:510,
          rank: 10, 
          type: "Cat",
          size: "Medium",
          age: "Adult",
          name: "Bengal", 
          adoptionRate: "Moderate", 
          price: 4000, 
          description: "Active, intelligent, and known for their leopard-like spots. Bengals require a lot of stimulation.", 
          image: {url:"https://cfa.org/wp-content/uploads/2024/03/ben-profile1-1.jpg"}
        }
      ];


      
    useEffect(() => {
        const fatchPetsData = async () => {
            try {
                const dogResponse = await axios.get(DOG_API_URL, { headers: { "x-api-key": DOG_API_KEY } });
                const catResponse = await axios.get(CAT_API_URL, { headers: { "x-api-key": CAT_API_KEY } });
                
                setHomeData(mostAdoptedPets)
                setPetsData([...dogResponse.data, ...catResponse.data]);

            } catch (error) {
                console.log(error.message || "error")
                
            }

        }

        fatchPetsData()
    },[])

    // console.log(petsData)

  return (
    <DataContex.Provider value={{petsData,homeData}}>
        {children}
    </DataContex.Provider>
  )
}

export default DataContexProvider;
