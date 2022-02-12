import React from 'react';
import './/NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar(){
  return (
    <div className="nav">
        <NavLink to="/" exact={true} style={{ textDecoration: 'none' }} activeClassName="active" className="link">HOME</NavLink>
        <br></br>
        <NavLink to="/kingpin" style={{ textDecoration: 'none' }} activeClassName="active" className="link">KINGPIN</NavLink>
        <br></br>
        <NavLink to="/incarnate" style={{ textDecoration: 'none' }} activeClassName="active" className="link">INCARNATE</NavLink>
        <br></br>
        <NavLink to="/about" style={{ textDecoration: 'none' }} activeClassName="active" className="link">ABOUT</NavLink>
    </div>
  );
}

export default NavBar;