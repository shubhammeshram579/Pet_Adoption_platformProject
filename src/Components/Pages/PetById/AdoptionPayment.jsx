import React ,{useState,useEffect,useContext} from 'react'
import { useParams,Link } from 'react-router-dom'
import DataContex from "../../ContextApi/DataContext.js"
import {useSelector,useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import {addShelters2} from "..//..//../ReduxSrore/AuthSlice.js"


const AdoptionPayment = () => {
    const {petId} = useParams()
    const {homeData,petsData} = useContext(DataContex);
    const [product ,setProduct] = useState([])
    const [product2 ,setProduct2] = useState([])
    const [gstamt ,setGstAmt] = useState(0);
    const [totalamt,setTotalamt] = useState(0)
    const currentuser = useSelector((state) => state.auth.user)
    // const ShelterData = useSelector((state) => state.auth.SheltersCard)
    const navigate = useNavigate()
    const dispatch  = useDispatch();

    // console.log(petId)
    useEffect(() => {
        const fatchData = async () => {
            const response = await homeData.filter((p) => (p.id === parseInt(petId)))
            setProduct(response)

        }

        fatchData()

    },[petId,homeData])




    useEffect(() => {
        const fatchData = async () => {
            const response = await petsData.filter((p) => (p.id === parseInt(petId)))
            setProduct2(response)

        }

        fatchData()

    },[petId,petsData])


   useEffect(() => {
    product.filter((i) => {
        let gstCal = i.price * 18 / 100;
        setGstAmt(gstCal)
        setTotalamt(i.price + gstCal);

    })
   },[product])



//    adopme btn
const handelClick = () => {
    const datadd = product.map((i) => {
        dispatch(addShelters2(i))
    })
    alert("pets adoption succefully")
    navigate("/SheltersNearYou")

}

//    console.log("data",product)
    
  return (
    <div style={{minHeight:"100vh" ,paddingTop:"200px"}}>
    <div style={{display:"flex" ,alignItems:"start",justifyContent:"space-between",padding:"5px 100px",backgroundColor:"#ddd"}}>
      <div className="page1 p-5"  style={{width:"50%"}}>
        <div>
            <h1>Customers</h1>
            <p>{currentuser ? (currentuser.email) : ("login first")}</p>
        </div>
        <div >
            <h1 style={{padding:"10px 0px"}}>Shipping Address</h1>
            <form style={{display:"flex" ,alignItems:"center",justifyContent:"space-between", width:"80%", flexWrap:"wrap" ,gap:"29px" ,paddingTop:"20px"}} action="">
                <label htmlFor="#">
                    Address <input type="text" name='address' value={"wakad"} placeholder='enter address'/>
                </label>
                <label htmlFor="#">
                    city <input type="text" name='city' value={"pune"} placeholder='enter city' />
                </label>
                <label htmlFor="#">
                    state  <input type="text" name='state' value={"Maharashtra"} placeholder='Maharashtra' />
                </label>
                <label htmlFor="#">
                    Pincode <input type="number" name='pincode' value={"441511"} placeholder='441601' />
                </label>
                <button style={{padding:"10px 30px" ,borderRadius:"20px" ,marginTop:"20px", backgroundColor:"green",border:"none",width:"200px" }} type='sumbit'>update address</button>
            </form>
        </div>

      </div>
      {/* non api data */}
      {product.map((product) => (
      <div key={product.id} className="page2" style={{width:"50%" ,padding:"48px 100px" ,backgroundColor:"#dddd"}}>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", borderBottom:"1px solid #fff"}}>
            <h1>ORDER SUMMARY </h1>
            <h5>edit card</h5>
        </div>
        
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", borderBottom:"1px solid #fff" ,padding:"10px"}}>
           <div style={{display:"flex", alignItems:"center",justifyContent:"center" ,gap:"20px"}}>
           <img height={150} width={200} style={{borderRadius:"10px",objectFit:"cover"}} src={product.image?.url} alt="" />
           <p>{product.name}</p>
           </div>
            <p>₹{product.price}</p>
        </div>
       
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between" ,borderBottom:"1px solid #fff", padding:"10px"}}>
            <h5>Tax Included in Total:GST 18%</h5>
            <p>₹{gstamt}</p>
        </div>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
            <h4>Total Payment</h4>
            <p>₹{totalamt}</p>
        </div>
        
      </div>

      
       ))}


    {/* api data */}
    {product2.map((product,index) => (
      <div key={product.id} className="page2" style={{width:"50%" ,padding:"48px 100px" ,backgroundColor:"#dddd"}}>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", borderBottom:"1px solid #fff"}}>
            <h1>ORDER SUMMARY </h1>
            <h5>edit card</h5>
        </div>
        
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", borderBottom:"1px solid #fff" ,padding:"10px"}}>
           <div style={{display:"flex", alignItems:"center",justifyContent:"center" ,gap:"20px"}}>
           <img height={150} width={200} style={{borderRadius:"10px",objectFit:"cover"}} src={product.image?.url} alt="" />
           <p>{product.name}</p>
           </div>
            <p>₹00.0</p>
        </div>
       
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between" ,borderBottom:"1px solid #fff", padding:"10px"}}>
            <h5>Tax Included in Total:GST 18%</h5>
            <p>₹00.0</p>
        </div>
        <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
            <h4>Total Payment</h4>
            <p>₹00.00</p>
        </div>
        
      </div>

      
       ))}
      
    </div>
    <button onClick={handelClick} style={{padding:"10px 50px" ,borderRadius:"20px",marginLeft:"140px",backgroundColor:"orange",border:"none" ,width:"400px"}} type='sumbit'>Continue Adoption</button>
    </div>
  )
}

export default AdoptionPayment
