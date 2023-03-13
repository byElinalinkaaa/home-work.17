import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const students = [
  {
    title: "Student Details Page",
    id: "1",
  },
  {
    title: "Student Name Page",
    id: "2",
  },
];

const Students = () => {
  const navigate = useNavigate();

  return (
    <div>
      <StyledUl>
        {students.map((student) => (
          <li key={student.id}>
            {student.title}
            <Button onClick={() => navigate(`${student.id}/detail`)}>
              Detail
            </Button>
          </li>
        ))}
      </StyledUl>
    </div>
  );
};

export default Students;

const StyledUl = styled.ul`
flex-direction:column;
  margin: 0px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  li {
    border: 2px solid rgb(79, 79, 112);
    margin-top: 20px;
    display: flex;
    border-radius: 10px;
    background-color: #b9347b;
    width: 550px;
    font-family:sans-serif;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
  }
  `;
 

const Button = styled.button`
  text-align: center;
  padding: 10px 20px;
  background-color: #1b3fcd;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
