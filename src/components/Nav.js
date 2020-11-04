import React from "react";
import logo from "../images/yourlogo.png";
import styled from "styled-components";
import { NavLinks } from "./NavLinks";
import { SocialLinks } from "./SocialLinks";

const Logo = styled.img`
  height: 40px;
`;

const StyledNav = styled.nav`
  background: linear-gradient(to bottom, #0007, #0000);
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
  }
  div {
    flex: 1;
    text-align: center;
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <div>
        <Logo src={logo} alt="" />
      </div>
      <NavLinks />
      <SocialLinks />
    </StyledNav>
  );
};
