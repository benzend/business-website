import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--primaryColor);
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <small>
        <p>Footer</p>
      </small>
    </StyledFooter>
  );
};
