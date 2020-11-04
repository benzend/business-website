import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 24px;
  a {
    padding: 5px;
    color: black;
    &:hover {
      background-color: green;
    }
  }
  &#nav-links {
    flex: 2;
  }
`;

const NavLink = styled.div`
  background-color: blue;
  overflow: hidden;
`;

export const NavLinks = () => {
  return (
    <NavLinksContainer id="nav-links">
      <NavLink>
        <Link to="/">Home</Link>
        <p>Link</p>
        <p>Link</p>
        <p>Link</p>
      </NavLink>
      <NavLink>
        <Link to="/about">About</Link>
      </NavLink>
      <NavLink>
        <Link to="/blog">Blog</Link>
      </NavLink>
      <NavLink>
        <Link to="/services">Services</Link>
      </NavLink>
      <NavLink>
        <Link to="/programs">Programs</Link>
      </NavLink>
      <NavLink>
        <Link to="/shows">Shows</Link>
      </NavLink>
    </NavLinksContainer>
  );
};
