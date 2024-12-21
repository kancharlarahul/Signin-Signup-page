// import React, { useState } from "react";
// import axios from "axios";

// function SignUp() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
//       alert(res.data.message);
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Sign Up</h1>
//       <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import API from "../api/api";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/api/auth/signup", {
        username,
        email,
        password,
      });
      setMessage(response.data.message); // Success message from backend
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
