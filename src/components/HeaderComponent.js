import React, { Component } from 'react'
import {Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron } from 'reactstrap'
import {NavLink} from 'react-router-dom'

export class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {  
        return (
          <>
            <Navbar dark expand="md">
              <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/">
                  <img
                    src="assets/images/logo.png"
                    height="30"
                    width="41"
                    alt="Ristorante Con Fusion"
                  />
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg"></span> Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus">
                        <span className="fa fa-info fa-lg"></span> About Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/menu">
                        <span className="fa fa-list fa-lg"></span> Menu
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-address-card fa-lg"></span>{" "}
                        Contact Us
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
            <Jumbotron>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h1>My New React Websit</h1>
                    <p>
                      This is my first time to make a react website ! This is
                      the first demo websit and knowing about many things in
                      it.It is giving me a very good experience though !
                    </p>
                  </div>
                </div>
              </div>
            </Jumbotron>
          </>
        );
    }
}

export default Header
