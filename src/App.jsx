import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import {Route , Routes} from 'react-router'
import Nav from './Pages/Nav'
import Banner from './Pages/Banner'
import Baner from './Pages/Baner'
import About from './Pages/About'
import Services from './Pages/Services'
import Service1 from './Pages/Service1'
import Design from './Pages/Design'
import Development from './Pages/Development'
import Marketing from './Pages/Marketing'
import Patner from './Pages/Patner'
import Contact from './Pages/Contact'
import Contact1 from './Pages/Contact1'
import Last from './Pages/Last'
const App = () => {
useEffect (()=>{
  AOS.init({
    duration:2000,
    offset:100,
    once:false,
  })
})
  return (
    <>
    
      <div>

        <Nav />
        <Routes>
          <Route path='/' element={
            <>
             <Banner />
        <Baner />
        <About />
        <Services />
        <Service1 />
        <Design />
        <Development />
        <Marketing />
        <Patner />
        <Contact />
        <Contact1 />
        <Last />
            </>
          }/>
          <Route path='/design' element={<Design />}/>
          <Route path='/marketing' element={<Marketing />}/>
          <Route path='/tech' element={<Service1 />}/>
          <Route path='/develop' element={<Development />}/>
          
        
        </Routes>
      </div>
      
    </>
  )
}

export default App
