import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../components/config/base";
const Post = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const submit = async () => {
    await addDoc(
      collection(db, "pure4231", {
        quote,
        author,
      })
    );
    setQuote("");
    setAuthor("");
    navigate("/");
    alert("successfull");
  };
  return (
    <Container>
      <Wrapper>
        <Input>
          <input
            type="text"
            placeholder="fill in quote"
            value={quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
          />{" "}
        </Input>

        <Input>
          <input
            type="text"
            placeholder="fill in author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </Input>
        <Button onClick={submit}>Post</Button>
      </Wrapper>
    </Container>
  );
};
export default Post;

const Container = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #020c1b;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.div`
  width: 98%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  input {
    background-color: inherit;
    outline: none;
    width: 90%;
    border: none;
    ::placeholder {
      color: black;
      font-size: 12px;
    }
  }
`;

const Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-size: 14px;
`;
