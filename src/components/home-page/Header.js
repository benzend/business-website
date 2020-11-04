import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  padding-bottom: 50px;
  font-size: 1.8rem;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>This is a Header</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, error!
        </p>
      </div>
    </StyledHeader>
  );
};
