import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
//   NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar dark expand="md">
        {/* <NavbarBrand href="/">toggle-icon???</NavbarBrand> */}
        <NavbarToggler onClick={toggle} type="button" expand="md" aria-expanded="false"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#quemSomos">QUEM SOMOS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#faleConosco">FALE CONOSCO</NavLink>
            </NavItem>
            <NavItem className="entrar">              
               <Link className="nav-link" to='/auth'>ENTRAR</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    
  );
}


export default Menu;