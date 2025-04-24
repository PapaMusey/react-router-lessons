import React from 'react'
import logo from '../assets/react-router.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <img src={logo} alt='react logo' className='logo'/>
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/products'><li>Products</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        
      </ul>
      <button onClick={()=> navigate ('/about')}>Get Started</button>
    </div>
  )
}

export default Navbar
