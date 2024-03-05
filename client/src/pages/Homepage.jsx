import React from 'react'
import '../index.css'
import Hero from '../components/Hero'
import Info from './Info'
import Top from '../components/Top'
// import About from './About.jsx'




const Homepage = () => {
  return (
    <div>
      <Hero/>
      <Info/>
      <Top/>
    </div>
  )
}

export default Homepage