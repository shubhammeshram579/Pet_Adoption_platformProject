import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [data,setData] = useState({})
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((values) => ({...values,username,email}))
    setUsername("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    alert(`user login ${username} succefully`)
    navigate("/")
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      
      console.log('Account created successfully');
    }
  };

  // console.log(data)

  return (
    <div style={{minHeight:"100vh" ,paddingTop:"150px"}}>
    <div className="create-account-container" >
      <h1>Create Account {data.username}</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{padding:"20px 0px"}}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{padding:"20px 0px"}}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{padding:"20px 0px"}}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{padding:"20px 0px"}}
          />
        </div>
        <button type="submit"  onChange={handleSubmit}>Create Account</button>
      </form>
    </div>
    </div>
  );
}

export default MyAccount;