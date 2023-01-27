import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const router = useNavigate();
    const[userName,setUserName]=useState();
useEffect(()=>{
    const dbUser =JSON.parse(localStorage.getItem("userData"))
    if(dbUser){
        setUserName(dbUser.name);
    }
},[])

function logOut(){
    localStorage.removeItem("userData");
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("cartProducts");
    setUserName("")
    toast.success("Logout Successfull")
    router('/Login')
}

    return (
        <div className='navbar'>
            <div id='logo'>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" />
                <div id='searchbar'>
                    <input type="text" placeholder='Search for Products,Brands and more' />
                </div>
            </div>
            <a href="" >{userName? userName:"Profile"}</a>
            <a href="">Become a Seller</a>
            <a href="">More</a>
            <a href="/Cart">Cart</a>
            <button onClick={logOut}> {userName ?"Logout":""} </button>
        </div>
    )
}

export default Header