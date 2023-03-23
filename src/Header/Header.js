import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
function Header() {
  return (
    <div className='header'>
        <div className='header-items'>
          <Link to="/homepage">
          <h4>Home</h4>
          </Link>
          <Link to="/cart">
          <h4>Cart</h4>
          </Link>
        </div>
    </div>
  )
}

export default Header
