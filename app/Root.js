import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Candies from "./components/Candies";

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
        <Link to="/">Home</Link>
        <Link to="/candies">Candies</Link>
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
