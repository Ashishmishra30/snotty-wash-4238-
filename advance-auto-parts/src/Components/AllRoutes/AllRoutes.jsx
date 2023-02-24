import React from 'react';
import {Routes, Route} from "react-router-dom";
import { ProductPage } from '../Productpage/ProductPage';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/products' element={<ProductPage/>}></Route>
        </Routes>

    </div>
  )
}
