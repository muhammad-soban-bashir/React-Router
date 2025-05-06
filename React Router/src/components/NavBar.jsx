import React from 'react'
import logo from "./../assets/logo.png"
import { Link } from 'react-router-dom'
function NavBar() {

  return (
    <div className='navbar'>
        <img src={logo} alt=""  width={150} height={100}/>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/products'><li>Products</li></Link>
            <Link to='contact'><li>Contact</li></Link>
            <Link to='about'><li>About</li></Link>
           
            
            
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default NavBar