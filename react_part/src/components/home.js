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
                <div className="wrapper" >
                    <div className="wrapper" >
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

                        <Row className="bottom ">
                            <Col md="auto"  className="redes">
                                <a href="https://www.facebook.com/"><img src={fb} alt="" /></a>
                                <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                                <a href="https://www.skype.com/"><img src={skype} alt="" /></a>
                            </Col>
                        </Row>
                    </div>
        </div>
        )
    }
}
