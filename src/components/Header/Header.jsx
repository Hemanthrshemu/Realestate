import React  from 'react'
import "./header.css"
import {Link} from "react-router-dom"


const Header = () => {
  return (

  <section className='h-wrapper'>
       <div className='flexCenter paddings innerWidth h-container'>
          
          <img src="../imgs/logo.png" alt="" width={100 }/>  

          <div className="flexCenter h-menu">
           <Link to="/" >Home</Link> 
           <Link to="/res" >Residencies</Link> 
           <Link to="/value" >Our Value</Link> 
           <Link to="/contact " >Contact Us</Link> 
           <Link to="/get" >Get Started</Link>  
           <Link to='/reg'><button className='button'>Register
            </button></Link>
           <Link to='/log'><button className='button'>
            Login
            </button></Link>
           

            {/* <a href="/#res">Residencies</a>
            <a href="/#value">Our Value</a>
            <a href="/#contact">Contact Us</a>
            <a href="/#get">Get Started </a> 
            <button className='button'>
            <a href="/#reg">Login</a> 
            </button> */}
          </div>

         
           

       </div>
  </section>
  )
}

export default Header