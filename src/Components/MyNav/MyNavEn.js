import React, { useState     } from 'react'
import './MyNav.css'
import { NavLink as MyLink, Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import Logo4 from '../../Images/4.jpg'

const MyNavEn = () => {
    const [ isOpen, setIsOpen ] = useState( false )
    const toggle = _ => setIsOpen( !isOpen )

    return (
      <Navbar expand="md" light >
        <div className='nav-overlay'></div>
        <div className="container con">
                <NavbarBrand exact to='/' tag={ Link } > 
                  <img src={ Logo4 } alt='' />combo 
                </NavbarBrand>
                <NavbarToggler onClick={ toggle } >
                    <i className={ `fas ${ isOpen ? "fa-times" : "fa-bars"}` } ></i>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink onClick={ toggle } to='/' exact tag={ MyLink } > home </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink onClick={ toggle } to='/Menu'  tag={ MyLink } > menu </NavLink>
                      </NavItem>
                      
                      <NavItem>
                        <NavLink onClick={ toggle } to='/Services'  tag={ MyLink } > services </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink onClick={ toggle } to='/About' tag={ MyLink } > about </NavLink>
                      </NavItem>
                      
                      <NavItem>
                        <NavLink onClick={ toggle } to='/Contact'  tag={ MyLink } > Contact </NavLink>
                      </NavItem>
                    </Nav>
                </Collapse>
        </div>
      </Navbar>
    )
}

export default MyNavEn
