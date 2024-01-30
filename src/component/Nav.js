import React from "react";
import "../style/Nav.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from "react-router-dom";
import '../App.scss';
import logo from '../logo.svg';
import { IoHome } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { Badge } from "react-bootstrap";

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav">
                <Navbar bg="primary" data-bs-theme="dark" fixed="top">
                    <Container className="nav-container">
                        <Navbar.Brand className="nav-brand" href="#home"><img src={logo} className="App-logo" alt="logo" />REACT Blog</Navbar.Brand>
                        <Nav className="me-auto nav-link">
                            <NavLink className="link" activeClassName = "active" to="/home" exact ><IoHome /></NavLink>
                            <NavLink className="link" activeClassName = "active" to="/news" exact ><FaNewspaper /></NavLink>
                            <NavLink className="link" activeClassName = "active" to="/notifications" exact >
                                <IoNotifications />
                                
                                </NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Navigation