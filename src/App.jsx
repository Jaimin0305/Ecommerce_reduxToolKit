import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import CardDetails from "./components/CardDetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import CardData from './components/CardData';



const App = () => {
  const[data, setData] = useState([...CardData]);
  

  return (
    <>
    <BrowserRouter>
      <Header setData = {setData}/>
        <Routes>
          <Route path='/' element={<Home items={data}/>}/>
          <Route path='/cart' element={<CardDetails/>}/>
      </Routes>
    </BrowserRouter>
    <Toaster />

    </>
  )
}

export default App;