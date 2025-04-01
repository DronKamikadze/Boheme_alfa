import React from "react";
import { Routes } from "react-router-dom"
import Home from "../Home/Home"
import Catalog from "../Catalog/Catalog";
import {  Route } from 'react-router-dom';
import { ROUTES } from "../../utils/routes";

const AppRoutes = () => {
    return(
        <Routes>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>

        

    )
}

export default AppRoutes