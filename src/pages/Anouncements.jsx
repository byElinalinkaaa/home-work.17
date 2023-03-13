import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AmouncementPage = () => {
  const navigation = useNavigate();
  const goToStudentsPage = () => {
    navigation("/courses/students");
  };
  return (
    <Container>
      <h1>Anouncement Page</h1>
      <StyledButton onClick={goToStudentsPage}>Go to Student Page</StyledButton>
    </Container>
  );
};

export default AmouncementPage;


const Container = styled.div`
  height: 100vh;
  background-color:white;
  padding: 10px;
  margin: 15px 15px 0;
`;

const StyledButton = styled.button`
  border-radius: 30px;
  color: #eee7e7;
  background-color: rgb(25, 174, 159);
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
