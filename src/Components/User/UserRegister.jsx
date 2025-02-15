import React, { useState } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link,useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:8000/api/v1/users/register", formData);
  //     alert(response.data.message);
  //     navigate("/Login")
  //   } catch (error) {
  //     console.error(error);
  //     alert("Registration failed. Please try again.");
  //   }
  // };



  const handleSubmit = () => {
    alert("user Registration successfully")
    navigate("/Login")
  }

  return (
    <div style={{minHeight:"100vh", paddingTop:"100px",display:"flex", alignItems:"center", justifyContent:"center"}}>
    <div style={{backgroundColor:"#fff", width:"24%" ,padding:"20px 0px"}}>
      <h1 className="text-center mb-4">Register</h1>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
        <div className="mb-3">
          <label className="form-label">Fullname</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your fullnam"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-info w-100">
          Register
        </button>
        <h5 className="pt-5 text-center">if you exited user then <span><Link className="text-info" to="/Login">Login</Link></span></h5>
      </form>
    </div>
    </div>
  );
};

export default UserRegister;
