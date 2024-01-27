import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

import Component1 from './Page/ComponentFirst';
import Component2 from './Page/ComponentSecond';
import Component3 from './Page/ComponentThird';
import Footer from './Component/Footer';
import NavbarComp from './Component/Navbar';

import "./Component/compt1.css"
import './App.css';

function App() {

  return (
    <div >
      <div>
        <BrowserRouter>

          <div>
            <NavbarComp />
          </div>

          <div>
            <Routes>
              <Route path='/' element={<Component1 />} />
              <Route path='/component2' element={<Component2 />} />
              <Route path='/component3' element={<Component3 />} />
            </Routes>
          </div>
          
        </BrowserRouter>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={false} 
        limit={3}
        newestOnTop={false}
        icon={false}
      />

      <Footer />
    </div>
  );
}

export default App;
