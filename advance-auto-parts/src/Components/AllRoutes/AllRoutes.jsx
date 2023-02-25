import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../../Home';
import { ProductPage } from '../Productpage/ProductPage';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<ProductPage/>}></Route>

        </Routes>

    </div>
  )
}
