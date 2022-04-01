import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home  from './pages/Home';
import Sobre from './pages/Sobre';
import Team from './pages/Team';

const MyRoutes = () => {
   return(
       <div className="my_route">
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Sobre />} path="/sobre" />
                <Route element={<Team />} path="/team" />
            </Routes>


        </BrowserRouter>
       </div>
   )
}

export default MyRoutes;