import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Header from './Header'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const router=useNavigate();
  const [cartProducts, setCartProducts] = useState();

  useEffect(() => {
    const cartProFromStorage = JSON.parse(localStorage.getItem("cartProducts"));
    if (cartProFromStorage) {
      setCartProducts(cartProFromStorage);
    } else {
      toast.success("Cart is empty !")
    }

  }, [])

  useEffect(() => {
    const logInOrNot = localStorage.getItem("isUserLoggedIn");
    if ( !logInOrNot) {
        router('/Login')
    }
    }, [])

  return (
    <div>
      <Header />
      <div className='topCart'>
        <div className='leftcart'>
          <div className='leftcart1'>
            <p>From Saved Address</p>
            <button>Enter Delivery Pincode</button>
          </div>
          <hr></hr>
          <div className='leftcart2'>
            {cartProducts && cartProducts.map((e, i) => (
              <div key={i}>
                <div className='Pro'>
                  <img id='proImg' src={e.image} alt='img' />
                  <div id='proDetail'>
                    <p>Description: {e.description}</p>
                    <p>Title: {e.title}</p>
                    <p>Price: {e.price}</p>
                    <p>Category: {e.category}</p>
                  </div>
                  <button className='Cart_i'>
                  <i class="fa-solid fa-xmark fa-lg"></i>
                  </button>
              
                </div>
              </div>

            ))}

          </div>
        </div>
        <div className='rightcart'>
        <div className='leftcart3'>
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart