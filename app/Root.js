import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Candies from "./components/Candies";

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <NavLink  to="/"
        className='nav-link'
        style={({isActive}) => ({
          color: isActive ? 'skyblue' : 'white'
        })}>Home</NavLink>
        
        <NavLink to="/candies"
        className='nav-link'
        style={({isActive}) => ({
          color: isActive ? 'skyblue' : 'white'
        })}>Candies</NavLink>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Routes>
          <Route path='/candies' element={<Candies/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default Root;
