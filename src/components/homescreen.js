import React from "react";
import styled from "styled-components";
import Post from "./post";
import Get from "./get";

const Homescreen = () => {
  return (
    <Container>
      <Post />
      <Get />
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: black;
`;
