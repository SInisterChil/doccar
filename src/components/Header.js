import React from 'react';
import Image from '.././Images/logo.png';
import {Navbar,Nav} from 'react-bootstrap';
import  {NavLink} from 'react-router-dom';



const Header = props =>{


return (
  <Navbar sticky="top" className="headnav" expand="lg" >
    <Navbar.Brand href="/"><img className="header__logoImage" src={Image} alt="twn-logo" /><div>Doc.Car</div></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggler-icon"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto"  >
        <NavLink to="/" id="element" exact activeClassName="navbar__link--active"   >Home</NavLink>
        <NavLink to="/services" id="element" exact activeClassName="navbar__link--active"  >Services</NavLink>
        <NavLink to="/checkout" id="element" exact activeClassName="navbar__link--active"  >About Us</NavLink>
        <NavLink to="/contact" id="element" activeClassName="navbar__link--active">Contact</NavLink>
      </Nav>
      <Nav className="ml-auto"  >
        <NavLink to="/login" id="element"  activeClassName="navbar__link--active">Login</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 
)
}




export default Header; 