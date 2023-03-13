import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Schedule = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Schedule Page</h1>
      <Button onClick={() => navigate("/notifications")}>
        Go to Notifications page
      </Button>
    </Container>
  );
};

export default Schedule;

const Container = styled.div`
  height: 100vh;
  background-color: white;
  padding: 10px;
  margin: 15px 15px 0;
 
`;

const Button = styled.button`
  border-radius: 30px;
  color: #eee7e7;
  background-color: rgb(25, 174, 159);
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`;
