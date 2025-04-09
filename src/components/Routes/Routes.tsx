import React from "react";
import { Routes } from "react-router-dom"
import Home from "../Home/Home"
import Catalog from "../Catalog/Catalog";
import Basket from "../Basket/Basket"
import About from "../About/About";
import {  Route } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";

const AppRoutes = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/basket" element={<Basket/>} />
            <Route path="/about" element={<About></About>} />
        </Routes>

        

    )
}

export default AppRoutes