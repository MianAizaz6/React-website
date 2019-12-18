import React, { Component } from 'react'
import {Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron,Button, Modal, ModalHeader,ModalBody,
   Form,FormGroup,Label,Input } from 'reactstrap'
import {NavLink} from 'react-router-dom'

export class Header extends Component { 
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen,
          isModalOpen : false
        });
      }

      toggleModal(){
            this.setState({
              isModalOpen : ! this.state.isModalOpen 
            });
      }
      
      handleLogin(){
          this.toggleModal();
          alert(" Username" + this.username.value + " Password " + this.password.value + " Remember me " +
           this.remember.checked);
           
          
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
                  <Nav className="ml-auto" navbar >
                    <NavItem>
                        <Button onClick={this.toggleModal} >Login &nbsp;
                        <span className="fa fa-user-circle fa-lg"></span>
                        </Button>
                        
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
            <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal} >
              <ModalHeader toggle={this.state.isModalOpen} >Login</ModalHeader>
              <ModalBody>
                  <Form onSubmit ={this.handleLogin}>
                     <FormGroup>
                        <Label>UserName</Label>
                        <Input type="text" name="username" id="username"
                        innerRef={(input) => this.username  = input} /> 
                     </FormGroup>
                     <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" id="password"
                        innerRef={(input) => this.password = input} /> 
                     </FormGroup>
                     <FormGroup check>
                       <Label check>
                         <Input type="checkbox" name="remember" 
                         innerRef ={(input) => this.remember = input} />
                         Remember Me
                       </Label>
                     </FormGroup>
                     <Button type="submit" value="submit" color="primary" >Login</Button>

                  </Form>
              </ModalBody>
            </Modal>
          </>
        );
    }
}

export default Header
