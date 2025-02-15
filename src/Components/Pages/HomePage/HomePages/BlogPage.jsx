import React from "react";

const BlogPage = () => {
  return (
    <div style={{padding:"50px 20px"}}>
        <h3 className="text-dark">Blogs</h3>
      <div className="row row-cols-1 row-cols-md-5">
        <div className="col mb-4">
          <div className="card" style={{height:"50vh" ,overflow:"hidden"}}>
            <img style={{height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgkMQpEJvfSREwx3M728457NIJ2vLQhxIpQ&s" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-dark">New Year’s Resolutions for Our Pets</h5>
              <p className="card-text text-dark">
              As the New Year approaches, many of us are reflecting on goals to improve our lives. Why not extend that opportunity for positive change to our pets? New Year’s resolutions aren’t just for humans — they can be a fun and impactful way to ensure our furry family members live their happiest, healthiest lives. Here are some ideas to inspire resolutions tailored for your pet's well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{height:"50vh" ,overflow:"hidden"}}>
            <img style={{height:"200px",objectFit:"cover"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbSixk1l02OTlcPmBIY9-LCDtlVZPZfy8eA&s" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-dark">Claire’s Journey of Survival and Second Chances</h5>
              <p className="card-text text-dark">
              Every rescue story shines brighter during the holiday season, a time for hope, love, and second chances — and Claire’s journey is no exception. This brave 2-year-old Chihuahua mix, along with her four young puppies, embodies the spirit of the season. Saved from the brink of tragedy, Claire and her pups were given the gift of life through the compassionate collaboration of our shelter partner, Friends of Jefferson Animals, and the unwavering dedication of our Mobile Rescue Team.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{height:"50vh" ,overflow:"hidden"}}>
            <img style={{height:"200px" ,objectFit:"cover"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZTc9dthYR3B7Zt51iciWzsmpBapZ8ya6mFg&s" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-dark">2024!</h5>
              <p className="card-text text-dark">
              Whatever you celebrate this month — Christmas, Chanukah, Kwanzaa, or Winter Solstice — December is pure magic. The lights on the trees, the light from the stars, and the candlelight — it all feels precious during the darkest month of the year. Memories feel precious, too, especially the memories of all my sweet 2024 fosters. I wish I could list each one, but believe me, they’re all in my heart. Here are just a few of the bright little lights from 2024.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{height:"50vh" ,overflow:"hidden"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWc_FMzhxPqNYoPWOVQFKQWJJ5DkFxsVMulw&s" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-dark">Unconditional Love Has No Age: The Benefits of Adopting a Senior Pet</h5>
              <p className="card-text text-dark">
              When it comes to adopting a pet, people often envision a bouncy puppy or playful kitten, but senior pets have an incredible amount to offer. Adopting an older dog or cat can be an incredibly rewarding choice for both the animal and the adopter.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card" style={{height:"50vh" ,overflow:"hidden"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGHrirvgkUqXw1o8P6T5spENrlymMSQev0Q&s" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-dark">Oldies, but oh…such goodies!</h5>
              <p className="card-text text-dark">
              When I saw this picture of Mango, I imagined him patiently waiting for that phone to ring with the best news possible: a new family to love him, a new lap to snuggle on, and a fresh start for his golden years. Mango’s story and his tender amber eyes spoke to me. A senior kitty whose life has seen too many dramatic twists and turns, Mango could be the poster boy for senior pet adoption. And since November is Adopt a Senior Pet Month, here is his saga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
