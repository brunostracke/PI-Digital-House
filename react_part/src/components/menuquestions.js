import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menuquestions.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
//   NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Dropzao from './dropdown';

const MenuQuestions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar dark expand="md">
        {/* <NavbarBrand href="/">toggle-icon???</NavbarBrand> */}
        <NavbarToggler onClick={toggle} type="button" expand="md" aria-expanded="false"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="entrar">              
               <Link className="nav-link" to='/isudghskalr'>Home</Link>
            </NavItem>
            <Dropzao grupo={} titulos={} />
            <Dropzao/>
            <Dropzao/>
            <Dropzao/>
            <Dropzao/>
            <Dropzao/>
          
          </Nav>
        </Collapse>
      </Navbar>
    
  );
}


export default MenuQuestions;