import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StudentsDetail = () => {
  const param = useParams();

  return (
    <Container>
      <p>Student detail page: </p>
      <p>Student {param.studentId}</p>
    </Container>
  );
};

export default StudentsDetail;

const Container = styled.div`
  flex-direction: column;
  margin: 0px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  p {
    border: 2px solid #4f4f70;
    margin-top: 20px;

    border-radius: 10px;
    background-color: #625692;
    width: 500px;
    font-family: sans-serif;
    padding: 10px;
    margin-bottom: 20px;
  }
`;
