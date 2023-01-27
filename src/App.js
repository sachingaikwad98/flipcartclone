import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import Products from './Components/Products';
import Cart from './Components/Cart';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
