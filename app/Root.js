import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Candies from "./components/Candies";
import SingleCandy from "./components/SingleCandy";
import Home from "./components/Home";

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
        <Routes>
          <Route path='/candies' element={<Candies/>}/>
          <Route index element={<Home/>}/>
          <Route path='/candies/:id' element={<SingleCandy/>}/>
        </Routes>
      </main>
    </div>
  );
};

export default Root;
