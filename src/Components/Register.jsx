import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';
import Login from './Login';


const Register = () => {

    const router = useNavigate(); // ....... instance for router

    const [userData, setUserData] = useState();   //......... useState for storing the data in state

    useEffect(() => {          // ................using useEffect to perform side function like storing data in localstorage as soon as state UserData get updated.
        if (userData) {
            const objtojson = JSON.stringify(userData);
            localStorage.setItem("userData", objtojson);
            toast.success("Registered Succesfully !!")
            router('/Login')
        }
    }, [userData])

    useEffect(() => {
        const logInOrNot = localStorage.getItem("isUserLoggedIn");
        if (logInOrNot) {
            router('/')
            toast.error("User already logged In!! Redirecting to Homepage...")

        }

    }, [])

    function submitForm(e) {           //........ ...... function for submit form button
        e.preventDefault();
        // toast.success("Submitted")
        setUserData({
            name: "Sachin",
            email: "abc@gmail.com",
            Password: "sachin@123",
        })
       

    }
    console.log(userData, "userdata here");


    return (
        <div >
            <div className='registerTopDiv'>
                <div id='leftReg'>
                    <h1>Looks like you're new here !</h1>
                    <p>Sign up with your  Email id and set up a password</p>
                    <div>
                        <img src='https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ=' />
                    </div>

                </div>

                <div id='rightReg'>
                    <form className='RegisterForm' onSubmit={submitForm}>
                        <label>Name</label><br></br>
                        <input type="text" /><br></br>
                        <label>Enter Email Id</label><br></br>
                        <input type="text" /><br></br>
                        <label>Create Password</label><br></br>
                        <input type="password" /><br></br>
                        <p> By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</p>
                        <input id="RegContinue" type="submit" value="Continue" /> <br></br>
                        <input id="Reglog" onClick={() => router('/Login')} type="submit" value="Existing USer? Log In" />
                    </form>

                </div>
            </div>



        </div>
    )
}

export default Register