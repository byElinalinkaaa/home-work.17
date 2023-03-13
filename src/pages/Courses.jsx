import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Courses = () => {
  const menuItem = [
    {
      path: "materials",
      name: "Materials",
    },
    {
      path: "students",
      name: "Students",
    },
    {
      path: "ratings",
      name: "Ratings",
    },
  ];
  return (
    <>
      <nav>
        <ContainerUl>
          {menuItem.map((item, index) => (
            <StyledNavlink to={item.path} key={index}>
              <Text>{item.name}</Text>
            </StyledNavlink>
          ))}
        </ContainerUl>
        <Outlet />
      </nav>
    </>
  );
};

export default Courses;

const ContainerUl = styled.ul`
  display: flex;
  background-color: #4f4fd0;
  color: #fff;
  height: 80px;
  gap: 30px;
  align-items: center;
  padding-left: 25px;
`;

const Text = styled.p`
  font-size: 30px;
`;

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  &.active {
    color: black;
    text-decoration: underline yellow 7px;
  }
`;
