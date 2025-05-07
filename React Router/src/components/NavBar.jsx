import React from 'react'
import logo from "./../assets/logo.png"
import { NavLink,useNavigate } from 'react-router-dom'
 
function NavBar() {

const navigate = useNavigate()


  return (
    <div className='navbar'>
        <img src={logo} alt=""  width={150} height={100}/>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='products'><li>Products</li></NavLink>
            <NavLink to='contact'><li>Contact</li></NavLink>
            <NavLink to='about'><li>About</li></NavLink>
            <NavLink to='jobs'><li>Jobs</li></NavLink>

           
            
            
        </ul>
        <button onClick={()=> navigate("/about", {replace:true} )}>Get Started</button>
    </div>
  )
}

export default NavBar