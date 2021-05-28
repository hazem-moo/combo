import React, { useState     } from 'react'
import './MyNav.css'
import { NavLink as MyLink, Link } from 'react-router-dom'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import Logo4 from '../../Images/4.jpg'

const MyNavAr = () => {
    const [ isOpen, setIsOpen ] = useState( false )
    const toggle = _ => setIsOpen( !isOpen )

    return (
      <Navbar expand="md" light >
        <div className='nav-overlay'></div>
        <div className="container con">
                <NavbarBrand  to='/' exact tag={ Link } > 
                  <img src={ Logo4 } alt='' />combo 
                </NavbarBrand>
                <NavbarToggler onClick={ toggle } >
                    <i className={ `fas ${ isOpen ? "fa-times" : "fa-bars"}` } ></i>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <NavItem>
                        <NavLink onClick={ toggle } to='/' exact tag={ MyLink } > الرئيسية </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink onClick={ toggle } to='/MenuAr'  tag={ MyLink } > القائمة </NavLink>
                      </NavItem>
                      
                      <NavItem>
                        <NavLink onClick={ toggle } to='/ServicesAr'  tag={ MyLink } > خدماتنا </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink onClick={ toggle } to='/AboutAr' tag={ MyLink } > من نحن </NavLink>
                      </NavItem>
                      
                      <NavItem>
                        <NavLink onClick={ toggle } to='/Contact'  tag={ MyLink } > اتصل بنا </NavLink>
                      </NavItem>
                    </Nav>
                </Collapse>
        </div>
      </Navbar>
    )
}

export default MyNavAr
