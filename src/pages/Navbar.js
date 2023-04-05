import React, { useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import {
  Nav,
  Logo,
  MoveLeft,
  MoveRight,
  StyledLink,
  NavAnchor,
  Show,
  Menu,
} from "../components/StyledComponent";
import jupit from "../assets/jupit.png";



const Navbar = () => {
  const zIndex = {
    zIndex: 8
  }
  const [menu, toggleMenu] = useState(false);
  return (
    
      <Nav>
        <MoveLeft>
          <Logo height={3.125} width={10} src={jupit} alt="logo" />
        </MoveLeft>
        <NavAnchor breakpoint={720} href="">
          About Us
        </NavAnchor>
        <NavAnchor breakpoint={720} href="">
          Product
        </NavAnchor>
        <NavAnchor breakpoint={720} href="">
          Resources
        </NavAnchor>
        <NavAnchor breakpoint={720} href="">
          Contact
        </NavAnchor>
        <MoveRight>
          <StyledLink breakpoint={1010}>Sign In</StyledLink>
          <StyledLink secondary breakpoint={1010}>
            Register
          </StyledLink>
        </MoveRight>
        {menu ? (
          <Show breakpoint={1010}>
            <CgClose
              color="#F2921D"
              size={35}
              onClick={() => toggleMenu(false)}
              style={zIndex}
            />
          </Show>
        ) : (
          <Show breakpoint={1010}>
            <CgMenuRight
              color="#F2921D"
              size={35}
              onClick={() => toggleMenu(true)}
            />
          </Show>
        )}
        {menu && (
          <div>
            <Menu>
              <Show breakpoint={720}>
                <NavAnchor href="">About Us</NavAnchor>
                <NavAnchor href="">Product</NavAnchor>
                <NavAnchor href="">Resources</NavAnchor>
                <NavAnchor href="">Contact</NavAnchor>
              </Show>
              <Show breakpoint={1010}>
                <StyledLink>Sign In</StyledLink>
                <StyledLink secondary>Register</StyledLink>
              </Show>
            </Menu>
          </div>
        )}
      </Nav>
  );
};

export default Navbar;
