import React from "react";
import { Routes } from "react-router-dom"
import Home from "../Home/Home"
import Catalog from "../Catalog/Catalog";
import Basket from "../Basket/Basket"
import About from "../About/About";
import CurrentProduct from "../CurrentProduct/CurrentProduct"
import {  Route } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";

const AppRoutes = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path={ROUTES.CATALOG} element={<Catalog />} />
            <Route path={ROUTES.BASKET} element={<Basket/>} />
            <Route path={ROUTES.ABOUT} element={<About></About>} />
            <Route
             path={ROUTES.SINGLEPRODUCT + '/:article'}
              element={<CurrentProduct></CurrentProduct>} />
        </Routes>

        

    )
}

export default AppRoutes