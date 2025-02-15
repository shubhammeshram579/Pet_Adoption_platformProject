import React, { useState,useEffect ,useContext} from 'react'
import { Link } from 'react-router-dom';
import "..//..//..//../App.css"
import DataContex from "..//..//../ContextApi/DataContext.js"

const TopAdopted = () => {
  const {homeData} = useContext(DataContex)

    const [products,setProducts] = useState([])


    
      useEffect(() => {
        const fatchProduct = async () => {
            try {
                const response = await homeData.filter((p) => p.rank >= 1 && p.rank <= 10)
                
                setProducts(response)
                
            } catch (error) {
                console.log(error.message)
                
            }

        }
        fatchProduct()

      },[homeData])



// console.log(products)

      

  return (
    <>
    <div style={{padding:"100px 0px"}}>
      <h5 className='text-dark pl-3 text-center' style={{fontSize:"2vw" ,paddingBottom:"100px"}}>Most Adopted Pets</h5>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-evenly" ,flexWrap:"wrap",gap:"50px"}}>
    {products.map((items,index) => (
    <Link  style={{textDecoration:"none"}} to={`/PetById/${items.id}`}><div key={index} class="card" style={{width: "25vw" ,height:"48vh",borderRadius:"10px", overflow:"hidden"}}>
        <img id='homeImage2' src={items.image.url} class="card-img-top" alt="..."/>
         <div class="card-body">
        <p class="card-text text-center text-dark">{items.name}</p>
      </div>
    </div></Link>
    ))}
  </div>
    </>
  )
}

export default TopAdopted
