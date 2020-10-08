import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      <Navbar color="dark" dark expand="md">
        {/* <NavbarBrand href="/">toggle-icon???</NavbarBrand> */}
        <NavbarToggler onClick={toggle} type="button" expand="md" aria-expanded="false"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">QUEM SOMOS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">FALE CONOSCO</NavLink>
            </NavItem>
            <NavItem>              
               <Link to='/auth'>ENTRAR</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Menu;