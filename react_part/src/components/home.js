import React, { Component } from 'react';
//import 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import './home.css';
import logo from "../assets/imgs/logo.jpg";
import doc from "../assets/imgs/bg_tipo3.jpg";
import fb from "../assets/imgs/fb-icon.jpg";
import linkedin from "../assets/imgs/linkedin-icon.jpg";
import skype from "../assets/imgs/skype-icon.jpg";
import Menu from './menu.js';
import 'bootstrap/dist/css/bootstrap.css';
import QuemSomos from './quemSomos.js';

export default class Homepage extends Component {
    render() {
        return (
                <div className="wrapper home" >
                        <Row>

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

                        {/* <Row> */}
                            <QuemSomos />
                        {/* </Row> */}

                        <Row id="faleConosco" className="bottom ">
                            <Col md="auto"  className="redes">
                                <a href="https://www.facebook.com/"><img src={fb} alt="" /></a>
                                <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                                <a href="https://www.skype.com/"><img src={skype} alt="" /></a>
                            </Col>
                        </Row>
                </div>
        )
    }
}
