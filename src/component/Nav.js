import React from "react";
import "../style/Nav.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.scss';
import logo from '../logo.svg';

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav">
                <Navbar bg="primary" data-bs-theme="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" />REACT Blog</Navbar.Brand>
                        <Nav className="me-auto ">
                            <Nav.Link className="link" href="#home">Home</Nav.Link>
                            <Nav.Link className="link" href="#features">Features</Nav.Link>
                            <Nav.Link className="link" href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Navigation