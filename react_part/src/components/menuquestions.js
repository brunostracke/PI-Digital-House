import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menuquestions.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import Dropzao from './dropdown';
import { questions } from '../assets/questions.js';

const MenuQuestions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const classes = [...new Set(questions.map((question) => question.classe))]  
  const transformer = (questionClasse) => questions.filter((question) => question.classe === questionClasse).map((question) => question.title);
  const titles = classes.map( (classe) => transformer(classe));

  const sendTitleIndex = (titulo) => props.sendTitleIndex(questions.map((question) => question.title).indexOf(titulo));

  return (

    
      <Navbar dark expand="md">
        {/* <NavbarBrand href="/">toggle-icon???</NavbarBrand> */}
        <NavbarToggler onClick={toggle} type="button" expand="md" aria-expanded="false"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="entrar">              
               <Link className="nav-link" to='/'>Voltar à página inicial</Link>
            </NavItem>
            {[...Array(classes.length).keys()].map( (n) => 
              <div key={n}>
                <Dropzao key={n} grupo={classes[n]} titulos={titles[n]} getTitle={sendTitleIndex} />
              </div>
            )};
          
          </Nav>
        </Collapse>
      </Navbar>
    
  );
}


export default MenuQuestions;