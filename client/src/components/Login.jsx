import React from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import './Login.css'
import { useState } from 'react';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
      email: "",
      password: "" 
  });
  const handleChange = (e) => {
    setUserDetails((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', userDetails);
      // console.log("response: " + response.data);
      if(response.data == 1) {
        window.location.href = "/home";
        localStorage.setItem("isIn", 'true');
      }
      else {
        localStorage.setItem("isIn", 'false');
      }
      // else if{}
    } catch (error) {
      console.log(error);
    }
  }
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      document.getElementById("togglePassword").className = "far fa-eye-slash";
      x.type = "text";
    } else {
      document.getElementById("togglePassword").className = "far fa-eye";
      x.type = "password";
    }
  }

  return (
    <motion.div className="loginBox"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    // transition={{delay: 0, duration: 1}}
    exit={{ opacity: 0 }}>
      <h2>Login</h2>
      {/* test button */}
      {/* <button className='bg-blue-500'>
        <i className="fa-solid fa-plus" style={
          { padding: "0px 10px 0px 0px" }
        }></i>
        Add Event
      </button> */}
      {/* test button */}
      <form>
        <div className="userBox">
          <input type="text" id="userid" name="email" placeholder=" " onChange={handleChange}></input>
          <label>Username</label>
        </div>
        <div className="userBox">
          <input type="password" id="myInput" name="password" placeholder=" "  onChange={handleChange}></input>
          <label>Password</label>
          <i className="far fa-eye" id="togglePassword"
            // onclick="myFunction()"
            onClick={() =>
              myFunction()

            }
          ></i>

        </div>
        <a  onClick={handleSubmit
          //handle this properly with router
          // should go back to screen from where the login button was clicked after successfully logging in
        }>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </motion.div>

  )
}

export default Login