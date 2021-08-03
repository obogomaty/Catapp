import React from 'react';
import './App.css';

const navbar = ({total}) =>{
    
    return(
        <div className="navbar">
          <div className="navbarstylin"><span>Navbar Gear</span> <span>${total}</span></div> 
        </div>
    )
}


export default navbar;