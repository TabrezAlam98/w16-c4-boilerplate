import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import {Home} from "../Components/Home";
import {About} from "../Components/About";
import {Products} from "../Components/Products";
const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/About'element={<About/>}/>
    <Route path='/Products'element={<Products/>}/>

  </Routes>
  </BrowserRouter>
  </>;
};
export { MainRoutes };