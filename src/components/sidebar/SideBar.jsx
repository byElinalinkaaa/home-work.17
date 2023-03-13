import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBar = ({ children }) => {
  const menuItem = [
    {
      path: "/courses",
      name: "Courses",
    },
    {
      path: "/anouncements",
      name: "Anouncements",
    },
    {
      path: "/notification",
      name: "Notifications",
    },
    {
      path: "/schedule",
      name: "Schedule",
    },
  ];
  return (
    <Container>
      <SideBarStyle>
        <Main>
          <h1>LOGO</h1>
        </Main>
        {menuItem.map((item, index) => (
          <LinkStyle to={item.path} key={index}>
            <LinkText>{item.name}</LinkText>
          </LinkStyle>
        ))}
      </SideBarStyle>
      <MainStyle>{children}</MainStyle>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  display: flex;
`;
const MainStyle = styled.main`
  width: 100%;
  padding: 0px;
`;

const SideBarStyle = styled.div`
  background: #dfd8df;
  color: #8c4090;
  height: 100vh;
  width: 250px;
`;

const Main = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 210px;
  text-align:center;
  height: 100px;
  padding:20px;
  margin-left: 0px;
  background-color: #c2bebc;
`;

const LinkStyle = styled(NavLink)`
  display: flex;
  color: #1f1515;
  padding: 10px 15px;
  gap: 15px;
  transition: all 0.5s;
  :hover {
    background: #851c88;
    color: #000;
    transition: all 0.5s;
  }
  &.active {
    background: lightskyblue;
    color: #000;
  }
`;
const LinkText = styled.div`
  font-size: 20px;
`;
