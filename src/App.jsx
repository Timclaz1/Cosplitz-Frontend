import { useState } from 'react'
import Navbar from "../src/components/Layout/Navbar";
import Footer from './components/Layout/Footer';
import Hero  from  "./components/Hero";
import Why from './components/Why';
import Who from './components/Who';
import Work from "./components/Work";

import './App.css'

function App() {


  return (
    <>
    <div className='flex flex-col'>
    <Navbar/>
    <Hero/>
    <Work/>
    <Why/>
    <Who/>
    <Footer/>
    </div>
    </>
  )
}

export default App
