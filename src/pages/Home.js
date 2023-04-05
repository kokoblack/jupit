import React from 'react'
import {About, Cards, Download, Features, Footer, Hero, Navbar} from './index'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Cards/>
        <Features/>
        <About/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default Home