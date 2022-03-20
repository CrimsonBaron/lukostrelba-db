import React, {useState, useEffect} from 'react'

import {Navbar,Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import navbarMembers from "../json/navbarMembers.json";


/**
 *   {
                        navbarMembers.navbarMembers.map(member => {
                            return (
                                <Link  className='link'
                                {...{
                                    to: member.address,
                                    color: "rgb(255,255,255)",
                                    style: { textDecoration: "none" },
                                    key: member.key,
                                  }}>
                                      <MenuItem>
                                       { member.text}
                                      </MenuItem>
                                </Link>
                            )
                         }  )
                    }
 */




const NavbarComponent = (props) => {

  const {elements} = props;

  const [headerStyle, setHeaderStyle] = useState("navbarComponentClear");
  const [dropDownStyle, setdropDownStyle] = useState("navBarDropDown");

  const listenScrollEvent = () =>{
      window.scrollY > 10 ? setHeaderStyle("navbarComponent") : setHeaderStyle("navbarComponentClear");
     
  }
  
  useEffect(()=>{
    window.addEventListener("scroll", listenScrollEvent);
  })



  return (
    <header >
  <Navbar collapseOnSelect expand="xl" fixed="top"  variant='dark' className={headerStyle} >
  <Container  className='me-auto'>
  <Navbar.Brand  href="/">
  <img
          alt=""
          src="/Logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{marginRight: "10px"}}
        />
    Lukostřelba Dolní Bousov</Navbar.Brand>
  <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav" style={{border: "none"}} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='me-auto'></Nav>
    <Nav className={'justify-content-end', dropDownStyle} >
        {
           navbarMembers.navbarMembers.map(member => {
              if (member.children.length == 0) {
                return(
                  <Nav.Link href={member.address} >{member.text}</Nav.Link>
                )
              }
              return(
                <NavDropdown title={member.text} id="offcanvasNavbarDropdown" >
                  <Nav.Link href={member.address} style={{color: "black"}} >{member.text}</Nav.Link>
                  <NavDropdown.Divider />
                    {
                      member.children.map(child =>{
                        return(
                          <NavDropdown.Item  href={child.address}>{child.text}</NavDropdown.Item>
                        )
                      })
                    }
                </NavDropdown>
              )
           })
        }
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default NavbarComponent