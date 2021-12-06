import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  background-color: red;

  color: blue;
  flex: 1;
`;
const Center = styled.div`
  background-color: yellow;
  color: aqua;
  flex: 1;
`;
const Right = styled.div`
  background-color: green;
  color: #232323;
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <h1>EDGE RESOURCE</h1>
      </Left>
      <Center>
        <h1>SEARCH & INPUT</h1>
      </Center>
      <Right>
        <h1>LOGIN & REGISTER</h1>
      </Right>
    </Container>
  );
};

export default Navbar;
