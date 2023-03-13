import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pix from "./left-quote.png";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../components/config/base";
const Get = () => {
  const [mybook, setMybook] = useState([]);

  const snapping = async () => {
    const datas = await collection(db, "pure4231");
    onSnapshot(datas, (mysnaps) => {
      const using = [];
      mysnaps.forEach((ele) => {
        using.push({ ...ele.data(), id: ele.id });
      });
      setMybook(using);
    });
  };
  useEffect(() => {
    snapping();
  }, []);
  return (
    <Container>
      <Wrapper>
        {mybook?.map((props) => {
          return (
            <Box>
              <Boxhold>
                <Image src={pix} />
                <Quote>{props.quote}</Quote>
                <Author>{props.author}</Author>
              </Boxhold>
            </Box>
          );
        })}
      </Wrapper>
    </Container>
  );
};
export default Get;

const Container = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
`;
const Boxhold = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Quote = styled.div`
  color: black;
  font-size: 14px;
`;
const Author = styled.div`
  color: black;
  font-size: 14px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: center;
`;
