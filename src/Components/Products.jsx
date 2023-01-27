import React from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import Header from './Header'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Products = () => {

  const [products,setProducts] = useState();

  useEffect(()=>{
    async function getData (){
      const {data}= await axios.get("https://fakestoreapi.com/products")
      // console.log(data, "data here...")
      setProducts(data);
    }
    getData ();
  })

  function addtoCart(e){
    const proFromLocalStorage = JSON.parse(localStorage.getItem("cartProducts")) || [];
    proFromLocalStorage.push(e);
    localStorage.setItem("cartProducts", JSON.stringify(proFromLocalStorage));
    toast.success("added to cart")
  }

  return (
    <div>
      <Header/>
      <div className='topProduct'>
        <div className='leftPro'>
          <h3>Filters</h3>
        </div>
        <div className='rightPro'>
          {products && products.map((e,i)=>(
            <div key={i}>
              <div className='Pro'>
                <img id='proImg' src={e.image} alt='img'/>
                <div id='proDetail'>
                  <p>Title: {e.title}</p>
                  <p>Price: {e.price}</p>
                  <p>Category: {e.category}</p>
                  <p>Description: {e.description}</p>
                  <button onClick={()=>addtoCart(e)}>Add to cart</button>
                </div>
              </div>

            </div>
          ))}
        

        </div>
      </div>

    </div>
  )
}

export default Products