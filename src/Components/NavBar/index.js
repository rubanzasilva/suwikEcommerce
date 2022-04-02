import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,Img} from './NavBarElements';
// import logo from '../../Images/logox.png';
import 'antd/dist/antd.css';

import { Typography } from 'antd';

const { Title } = Typography;

const NavBar = ({toggle,img,alt}) => {
    return (
        <>
          <Nav>
              <NavBarContainer>
                  <NavLogo to='/'>
                  SUWIK
                      {/* <Img src={logo} alt={alt}/> */}
                  </NavLogo>

                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLinks to="/ ">About Suwik</NavLinks>
                          {/* <NavLinks to="/ContactUs">About Zicofe</NavLinks> */}
                      </NavItem>
                      

                      <NavItem>

                          {/* <NavLinks to="/cafe">Zicofe Cafe</NavLinks> */}
                          <NavLinks to="/">Contact Us</NavLinks>
                      </NavItem>


                      <NavItem>
                          <NavLinks to="/">Product catalog</NavLinks>
                          {/* <NavLinks to="/shop">Shop</NavLinks> */}
                      </NavItem>


                      

                  </NavMenu>

                  <NavBtn>
                      <NavBtnLink to="/ContactUs"> Contact us </NavBtnLink>
                  </NavBtn>
                  
              </NavBarContainer>
          </Nav>
            
        </>
    )
}

export default NavBar