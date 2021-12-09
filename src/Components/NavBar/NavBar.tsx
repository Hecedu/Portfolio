import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { HashLink, NavHashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className="shadow" style={{ backgroundColor: "#071740", position: "sticky" }}>
            <Container fluid>
                <Navbar.Brand href="/#about">Hector Magana</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#about">About</Nav.Link>
                        <Nav.Link href="/#projects">Projects</Nav.Link>
                        <Nav.Link href="/#blog">Blog</Nav.Link>
                        <Nav.Link href="/#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
