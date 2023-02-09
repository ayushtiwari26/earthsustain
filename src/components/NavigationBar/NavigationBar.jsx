import React from 'react'
import { Button } from '@mui/material';
import './NavigationBar.css'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavigationBar = () => {
  return (
    <div className="navbar">
     <nav className="MainNav">
        <div className="logo">
          <a href='/'><img src={'/images/logo.webp'} alt="logo" /></a>
        </div>
        <p className="logoname">Earthly</p> 
        <ul className="nav-links uline">
            <li><a href='/about-us'>About</a></li>
            <li><a href='/newarrival'>New Arrivals</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/help">Help</a></li>
            <li><a href='/contact-us' className='navConButton'>
                <Button variant="contained" color="success" >Contact us</Button></a></li>
            <li>
                <IconButton  color="success" size="large" aria-label="add to shopping cart">
                <AddShoppingCartIcon />
                </IconButton></li>
        
        </ul>
    </nav>

     
    </div>
  )
}

export default NavigationBar