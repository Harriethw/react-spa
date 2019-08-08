import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Schedule from "./Schedule";
import Location from "./Location";
import FAQ from "./FAQ";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">Away Day 2019</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><NavLink to="/">Schedule</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/location">Location</NavLink></Nav.Link>
                                <Nav.Link><NavLink to="/faq">FAQ</NavLink></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Card className="content" body>
                        <Route exact path="/" component={Schedule} />
                        <Route path="/location" component={Location} />
                        <Route path="/faq" component={FAQ} />
                    </Card>
                </div>
            </HashRouter>
        );
    }
}

export default Main;

