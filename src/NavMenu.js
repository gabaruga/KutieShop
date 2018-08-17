import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import CheckCounter from './CheckCounter';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {check: 0};
  }

  render() {    
    return (
      <div>
      <Navbar fluid collapseOnSelect style={{'marginBottom':'0'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to="/">
              <a className="font-weight-bold" href="/">Магазинчик Кутишків</a>
            </LinkContainer>
          </Navbar.Brand>
          
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight>
            <LinkContainer to="/check">
              <NavItem>
                <CheckCounter />
              </NavItem>
            </LinkContainer>
          </Nav>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/bread" activeClassName="active">
              <NavItem>Хлібці</NavItem>
            </LinkContainer>
            <LinkContainer to="/pies" activeClassName="active">
              <NavItem>Пиріжки</NavItem>
            </LinkContainer>           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  }
}

export default NavMenu;
