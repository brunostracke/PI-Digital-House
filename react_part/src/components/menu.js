import React, { Component } from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';

export default class menu extends Component {
    render() {
        return (
            <div>
                 <div className=" col-md-8 menu">
                    <nav className="navbar navbar-expand-md navbar-dark">
                
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                          <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse navbar-dark " id="navbarNav">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <a className="nav-link" href="#quemsomos">QUEM SOMOS</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#faleconosco">FALE CONOSCO</a>
                            </li>
                            <li className="nav-item entrar">
                              <Link to='/auth'>ENTRAR</Link>
                            </li>
                          </ul>
                        </div>
                      </nav>    
                </div>
            </div>
        )
    }
}
