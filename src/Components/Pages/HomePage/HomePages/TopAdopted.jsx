import React, { useState,useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom';
import "./Style.css"
// import UserContext from "..//../ContexApi/UsedContexApi.js"

const TopAdopted = () => {
//   const {products2} = useContext(UserContext)

    const [products,setProducts] = useState([])

    const mostAdoptedPets = [
      // Dogs
      { 
        id:1,
        rank: 1, 
        type: "Dog",
        name: "Labrador Retriever", 
        adoptionRate: "High", 
        price: "$500 - $2,000", 
        description: "Friendly, intelligent, and great for families. Labradors are one of the most popular dog breeds worldwide.", 
        image: "https://image.petmd.com/files/styles/863x625/public/2024-11/labrador-retriever.jpg" 
      },
      { 
        id:2,
        rank: 2, 
        type: "Dog",
        name: "French Bulldog", 
        adoptionRate: "High", 
        price: "$1,500 - $3,000", 
        description: "Small, affectionate, and great for apartment living. French Bulldogs are highly sought after.", 
        image: "https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg" 
      },
      { 
        id:3,
        rank: 3, 
        type: "Dog",
        name: "Golden Retriever", 
        adoptionRate: "High", 
        price: "$700 - $2,500", 
        description: "Loyal, intelligent, and great with children. Golden Retrievers are known for their friendly nature.", 
        image: "https://heronscrossing.vet/wp-content/uploads/Golden-Retriever.jpg" 
      },
    //   { 
    //     id:4,
    //     rank: 4, 
    //     type: "Dog",
    //     name: "German Shepherd", 
    //     adoptionRate: "High", 
    //     price: "$500 - $2,000", 
    //     description: "Highly trainable, protective, and intelligent. German Shepherds are often used in police and service work.", 
    //     image: "https://example.com/german_shepherd.jpg" 
    //   },
    //   { 
    //     id:5,
    //     rank: 5, 
    //     type: "Dog",
    //     name: "Bulldog", 
    //     adoptionRate: "Moderate", 
    //     price: "$1,000 - $4,000", 
    //     description: "Calm, affectionate, and great for families. Bulldogs have a distinctive wrinkled face and sturdy build.", 
    //     image: "https://cdn.britannica.com/08/234208-050-C9A21C4C/English-bulldog-dog.jpg" 
    //   },
    
    //   // Cats
    //   { 
    //     id:6,
    //     rank: 6, 
    //     type: "Cat",
    //     name: "Domestic Shorthair", 
    //     adoptionRate: "High", 
    //     price: "$50 - $200", 
    //     description: "Friendly, adaptable, and commonly found in shelters. Domestic Shorthairs make great companions.", 
    //     image: "https://www.trupanion.com/images/trupanionwebsitelibraries/pet-blogs/domestic-shorthair-cat-blanket-1-.jpg?sfvrsn=f7134fc_6" 
    //   },
    //   { 
    //     id:7,
    //     rank: 7, 
    //     type: "Cat",
    //     name: "Maine Coon", 
    //     adoptionRate: "High", 
    //     price: "$800 - $2,500", 
    //     description: "Large, fluffy, and affectionate. Maine Coons are one of the largest domesticated cat breeds.", 
    //     image: "https://example.com/maine_coon.jpg" 
    //   },
      { 
        id:8,
        rank: 8, 
        type: "Cat",
        name: "Siamese", 
        adoptionRate: "High", 
        price: "$400 - $1,500", 
        description: "Vocal, affectionate, and striking in appearance. Siamese cats are known for their blue eyes and sleek coats.", 
        image: "https://www.catster.com/wp-content/uploads/2023/11/Siamese-Cat_Andreas-LischkaPixabay.jpg" 
      },
      { 
        id:9,
        rank: 9, 
        type: "Cat",
        name: "Ragdoll", 
        adoptionRate: "Moderate", 
        price: "$800 - $3,000", 
        description: "Gentle, affectionate, and known for their floppy nature when picked up. Ragdolls love human attention.", 
        image: "https://cfa.org/wp-content/uploads/2024/06/2024-c23c-ZeusRagdollXiaoYao-1024x768.webp" 
      },
      { 
        id:10,
        rank: 10, 
        type: "Cat",
        name: "Bengal", 
        adoptionRate: "Moderate", 
        price: "$1,000 - $4,000", 
        description: "Active, intelligent, and known for their leopard-like spots. Bengals require a lot of stimulation.", 
        image: "https://www.tippaws.com/cdn/shop/articles/getting-to-know-your-bengal-cat-tippaws.png?v=1729077812" 
      }
    ];
    
    // console.log(mostAdoptedPets);
    
    

      useEffect(() => {
        const fatchProduct = async () => {
            try {
                // await setProducts(mostAdoptedPets)
                const response = await mostAdoptedPets.filter((p) => p.rank >= 1 && p.rank <= 10)
                
                setProducts(response)
                
            } catch (error) {
                console.log(error.message)
                
            }

        }
        fatchProduct()

      },[mostAdoptedPets])

  return (
    <div style={{padding:"100px 0px"}}>
      <h5 className='text-dark pl-3 text-center' style={{fontSize:"2vw" ,paddingBottom:"100px"}}>Most Adopted Pets</h5>
      <div style={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly",flexWrap:"wrap"}}>
        {products.map((product,index) => (
             <Link  style={{textDecoration:"none"}} to={`/Product/${product.id}`}><div key={index} style={{backgroundColor:"#fff",width:"500px" ,height:"550px" ,margin:"10px" ,borderRadius:"10px" ,paddingTop:"10px"}}>
                <img id='homeImage' height={450} width={450} src={product.image} alt="" />
                <p style={{color:"#111" ,fontSize:"1vw" , fontWeight:"500" ,textAlign:"center"}}>{product.name}</p>
            </div></Link>
           
         
        ))}
      </div>
    </div>
  )
}

export default TopAdopted
