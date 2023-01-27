import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Login = () => {
  const router = useNavigate();
  const [loginData, setLoginData] = useState();

  useEffect(() => {        //.......................(3) 
    if (loginData) {
      const getDatafromReg = JSON.parse(localStorage.getItem("userData"));
      console.log(getDatafromReg,"getDatafromReg heree")

      if(getDatafromReg){
        if(loginData.email==getDatafromReg.email && loginData.password==getDatafromReg.password){
          localStorage.setItem("isUserLoggedIn","true")
          toast.success("Login Successful!")
          router('/');
        }else{
          toast.error(" Oops, Wrong Credentials !!")
        }
      }else{
        toast.error("User Not Found, Please Register !")
        router('/Register')
    }
    }
  },[loginData])
  
  useEffect(()=>{     //..............................................(4)
    const logInOrNot = localStorage.getItem("isUserLoggedIn");
    if(logInOrNot){
      router('/')
      toast.error("User already logged In!! Redirecting to Homepage...")
    }
  },[])


  function Login(e) {                     //.....................................(2) Login button var click kel ki kay hoil te
    e.preventDefault();
    setLoginData({
      email: "abc@gmail.com",
      Password :"sachin@123",            // Logindata state madhe data save hoil
    })
  } 


  return (
    <div> 
      <div className='LoginTopDiv'>
        <div id='leftLog'>
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
          <div>
            <img src='https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ=' />
          </div>

        </div>

        <div id='rightLog'>
          <form className='LoginForm' onSubmit={Login}>          
            <label>Enter Email Id</label><br></br>
            <input type="text" /><br></br> 
            <label>Type your Password</label><br></br>
            <input type="password" /><br></br>
            <p> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</p>
            <input id="LogContinue" type="submit" value="Login" /> <br></br>
            <p> New? <br></br>Want to register ?</p>
            <button onClick={() => router('/Register')} id='LogButton'>Register Now...</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Login