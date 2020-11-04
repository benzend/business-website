import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineYoutube } from "react-icons/ai";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1.6rem;
    padding: 5px;
  }
`;

export const SocialLinks = () => {
  return (
    <StyledDiv>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <AiOutlineFacebook />
      </a>
      <a href="#">
        <AiOutlineYoutube />
      </a>
    </StyledDiv>
  );
};
