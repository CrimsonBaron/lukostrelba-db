import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import SideContent from "./json/sideContent.json"

import NavbarComponent from './Components/navbar';
import FrontPage from './Components/frontPage';
import Footer from './Components/footer'
import PageComponent from './Components/pageComponent';
import Pricing from './Components/pricing';
import Areal from './Components/areal';
import Contact from './Components/contact';

const App = () =>{

  return(
    <BrowserRouter>
    <div className="AppWrapper">
      <Routes>
        <Route path='/' element={
          <>
             <NavbarComponent  />
             <FrontPage /> 
             <Footer />
          </>
        } />
        <Route path='/info' element={
          <>
             <NavbarComponent  />
             <PageComponent json={SideContent.necoOLukostrelbe} /> 
             <Footer />
          </>
        } />
        <Route path='/archerystart' element={
          <>
             <NavbarComponent  />
             <PageComponent json={SideContent.zacinameSLukostrelbou} /> 
             <Footer />
          </>
        } />
        <Route path='/pricing' element={
          <>
             <NavbarComponent  />
             <Pricing/>
             <Footer />
          </>
        } />
        <Route path='/areal' element={
          <>
             <NavbarComponent  />
             <Areal/>
             <Footer />
          </>
        } />
        <Route path='/contact' element={
          <>
             <NavbarComponent  />
             <Contact />
             <Footer />
          </>
        } />
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));

