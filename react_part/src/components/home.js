import React, { Component } from 'react';
//import 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import './home.css';
import logo from "../assets/imgs/logo.jpg";
import doc from "../assets/imgs/doc.jpg";
import fb from "../assets/imgs/fb-icon.jpg";
import linkedin from "../assets/imgs/linkedin-icon.jpg";
import skype from "../assets/imgs/skype-icon.jpg";
import Menu from './menu.js';
import 'bootstrap/dist/css/bootstrap.css'

export default class Homepage extends Component {
    render() {
        return (
<<<<<<< HEAD
                
                <div className="wrapper" >
                    <Row>
                        
                            <Col md="4" className="top-img">
                                <img src={logo} alt="" />
                            </Col>
            
                            <Col md="8" className="menuzinho">
                                <Menu />
                            </Col>
                           
                    </Row>
=======
>>>>>>> 34e389c209e600eac936814bf411c3282837cae9

            <div className="wrapper" >
                <Row>

<<<<<<< HEAD
                    <Row md="12" className="bottom">
                        <Col md="4" sm="0">
                            <Col md="4" sm="12" className="redes">
                                <a href="https://www.facebook.com/"><img src={fb} alt="" /></a>
                                <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                                <a href="https://www.skype.com/"><img src={skype} alt="" /></a>
                            </Col>
                        </Col>
                    </Row>
                </div>
=======
                    <Col md="4" className="top-img">
                        <img src={logo} alt="" />
                    </Col>

                    <Col md="8" className="align-self-center">
                        <Menu />
                    </Col>

                </Row>

                <Row md="12" className="mid">
                    <Col md="12">
                        <img src={doc} alt="" />
                    </Col>
                </Row>

                <Row className="bottom ">
                    <Col md="auto"  className="redes">
                        <a href="https://www.facebook.com/"><img src={fb} alt="" /></a>
                        <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                        <a href="https://www.skype.com/"><img src={skype} alt="" /></a>
                    </Col>
                </Row>
            </div>
>>>>>>> 34e389c209e600eac936814bf411c3282837cae9
        )
    }
}
