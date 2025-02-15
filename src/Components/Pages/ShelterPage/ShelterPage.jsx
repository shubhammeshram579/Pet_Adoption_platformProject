import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const ShelterPage = () => {
    const [shelters ,setShelters] = useState([])

    const currentSherer = useSelector((state) => state.auth.SheltersCard)
    const currentSherer2 = useSelector((state) => state.auth.SheltersCard2)

    const ShelterList = [
        {
          id:1,
          name: "People For Animals",
          location: "New Delhi, Delhi",
          contact: "+91-11-12345678",
          description: "India's largest animal welfare organization.",
          image: "https://media.licdn.com/dms/image/v2/C561BAQFRn3SidF76vw/company-background_10000/company-background_10000/0/1583914934408?e=2147483647&v=beta&t=3kLQvG-JUSukoC0_vhFkrf9noSLQ8z1KxTHqzG3NdMs"
        },
        {
          id:2,
          name: "Blue Cross of India",
          location: "Chennai, Tamil Nadu",
          contact: "+91-44-87654321",
          description: "Rescuing and rehabilitating animals since 1959.",
          image: "https://asianatimes.com/wp-content/uploads/2021/11/Untitled-design-52.png"
        },
        {
          id:3,
          name: "The Bombay Society for the Prevention of Cruelty to Animals (BSPCA)",
          location: "Mumbai, Maharashtra",
          contact: "+91-22-98765432",
          description: "Providing medical aid and shelter.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStD2jdWmBmQiU7Lz4DY_lQ1hhNyVJp50P7vA&s"
        },
        {
          id:4,
          name: "Friendicoes SECA",
          location: "New Delhi, Delhi",
          contact: "+91-11-56789012",
          description: "Dedicated to the rescue, treatment, and adoption of stray animals.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpbcFw5CuNIyxW0D9ekMo519IFSR8qiM5fQ&s"
        },
        {
          id:5,
          name: "Animal Aid Unlimited",
          location: "Udaipur, Rajasthan",
          contact: "+91-294-7654321",
          description: "Rescuing street animals in need of urgent medical care.",
          image: "https://www.animalaidunlimited.org/wp-content/themes/cgit-animal-aid-unlimited/images/Icon_2.png"
        },
        {
          id:6,
          name: "Karuna Animal Shelter",
          location: "Bengaluru, Karnataka",
          contact: "+91-80-23456789",
          description: "Promoting kindness towards animals through rescue and rehabilitation.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnCBDBUzN_OC74i52uengJ-HF11QGKQi2LQ&s"
        },
        {
          id:7,
          name: "Sanjay Gandhi Animal Care Centre",
          location: "New Delhi, Delhi",
          contact: "+91-11-76543210",
          description: "India’s oldest and largest animal shelter.",
          image: "https://3.imimg.com/data3/TQ/BP/MY-3453553/sanjay-gandhi-animal-care-centre-logo-120x120.png"
        },
        {
          id:8,
          name: "CUPA (Compassion Unlimited Plus Action)",
          location: "Bengaluru, Karnataka",
          contact: "+91-80-34567890",
          description: "Working for animal welfare and rights.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVC6CHNuSpzVixLGM5dsAvV75eEbj3x5QMA&s"
        },
        {
          id:9,
          name: "RESQ Charitable Trust",
          location: "Pune, Maharashtra",
          contact: "+91-20-23459876",
          description: "Dedicated to rescuing injured and sick street animals.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP9ROpUU912msHzEa-guDNjdJixtlZIZ3gQ&s"
        },
        {
          id:10,
          name: "Animal Shelter Agra",
          location: "Agra, Uttar Pradesh",
          contact: "+91-562-12349876",
          description: "Providing medical aid, rescue, and shelter for animals in need.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWPB4gEd6o0RgbXplf1sb9D25FDUncLSpNg&s"
        },
        {
          id:11,
          name: "Stray Relief and Animal Welfare (STRAW) India",
          location: "Gurgaon, Haryana",
          contact: "+91-124-45678901",
          description: "Promoting humane treatment of animals and preventing cruelty.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhdAjibrl6lfp70x99z2PfFHbQ8kNYoFa8A&s"
        },
        {
          id:12,
          name: "The Pawsome People Project",
          location: "Hyderabad, Telangana",
          contact: "+91-40-87654321",
          description: "Providing rescue and rehabilitation services for stray animals.",
          image: "https://static1.squarespace.com/static/5d89e2dbe969b660d8e81b64/t/6393b1f319e469602bfc43f4/1710574542729/"
        },
        {
          id:13,
          name: "Animal Rahat",
          location: "Satara, Maharashtra",
          contact: "+91-2162-123456",
          description: "Relieving the suffering of working animals.",
          image: "https://resources.peta.org/engaging-networks/pages/animalrahat/images/social-media-thumbnail-animal-rahat.jpg"
        },
        {
          id:14,
          name: "Hope for Strays",
          location: "Mumbai, Maharashtra",
          contact: "+91-22-76543210",
          description: "Rescuing and rehabilitating stray animals.",
          image: "https://hopeforstrays.org/wp-content/uploads/2019/11/new-border.png"
        },
        {
          id:15,
          name: "Animals Matter to Me (AMTM)",
          location: "Mumbai, Maharashtra",
          contact: "+91-22-23456789",
          description: "A sanctuary for abandoned, injured, and ill-treated animals.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT790wV8E5St_p-bPw3PcHOSXMwn50YQJbhNA&s"
        }
      ];      


      useEffect(() => {
        const FatchShelter = async () => {
            await setShelters(ShelterList);
        }

        FatchShelter()
        
      },[])



  return (
    <div style={{paddingTop:"10px"}}>
        <div style={{ height:"500px", overflow:"hidden" ,textAlign:"center"}}>
          <img style={{width:"80%" ,objectFit:"cover"}} src="https://img.freepik.com/free-vector/pet-sitting-service-flat-design-social-media-cover-template_23-2149655283.jpg?t=st=1738496927~exp=1738500527~hmac=51c37eab59b984c635651f1d635ab7309ee283d2470be6b8e57249ac685cef65&w=1380" alt="" />
          </div>
          <h1 style={{textAlign:"center" ,backgroundColor:"#fff" ,width:"80vw" ,marginLeft:"189px" ,color:"rebeccapurple"}}>Partner Shelters</h1>
    
      <div style={{ padding:"30px 0px",display:"flex", alignItems:"center", justifyContent:"space-evenly" ,flexWrap:"wrap"}}>
      
      {currentSherer.map((shel) => (
        <div key={shel.id} className='bg-light d-flex align-items-start justify-content-between' style={{height:"32vh",width:"500px" ,padding:"20px" ,margin:"10px" ,gap:"20px" ,borderRadius:"10px"}}>
            <div>
                <img height={150} width={150} style={{borderRadius:"100%",objectFit:"cover"}} src={shel.data.image.url} alt={shel.name} />
            </div>
            <div>
            <h3>{shel.info.fullname}</h3>
            <p>{shel.info.address}</p>
            <p>{shel.info.phone}</p>
            <p>{shel.info.message}</p>
            </div>
        </div>
      ))}

      {currentSherer2.map((shel2,index) => (
        <div key={index} className='bg-light d-flex align-items-start justify-content-between' style={{height:"32vh",width:"500px" ,padding:"20px" ,margin:"10px" ,gap:"20px" ,borderRadius:"10px"}}>
            <div>
                <img height={150} width={150} style={{borderRadius:"100%",objectFit:"cover"}} src={shel2.image?.url} alt={shel2.name} />
            </div>
            <div>
            <h3>{shel2.name}</h3>
            <p>mumbai</p>
            <p>7278724248</p>
            <p>{shel2.description}</p>
            </div>
        </div>
      ))}
    </div>

    <div style={{ padding:"30px 0px",display:"flex", alignItems:"center", justifyContent:"space-evenly" ,flexWrap:"wrap"}}>
      
      {shelters.map((shel,index) => (
        <div key={index} className='bg-light d-flex align-items-start justify-content-between' style={{height:"32vh",width:"500px" ,padding:"20px" ,margin:"10px" ,gap:"20px" ,borderRadius:"10px"}}>
            <div>
                <img height={150} width={150} style={{borderRadius:"100%",objectFit:"cover"}} src={shel.image} alt={shel.name} />
            </div>
            <div>
            <h3>{shel.name}</h3>
            <p>{shel.location}</p>
            <p>{shel.contact}</p>
            <p>{shel.description}</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ShelterPage
