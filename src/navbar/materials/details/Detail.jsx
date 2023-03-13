import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const param = useParams();
  return (
    <>
      <Container>
        <div>
          <p>Material detail page: </p>
          <p>Material {param.materialId}</p>
        </div>
      </Container>
      <div>
        <StyledUl>
          <StyledLink to="submitted">Submitted</StyledLink>
          <StyledLink to="waiting">Waiting</StyledLink>
          <StyledLink to="late">Late</StyledLink>
        </StyledUl>
        <Outlet />
      </div>
    </>
  );
};

export default Detail;

const Container = styled.div`
  background-color: aquamarine;
  padding: 15px;
  margin: 15px 15px 0;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 15px;
  background-color: #29c6b6;
  height: 50px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  &.active {
    color: #222;
    text-decoration: underline yellow 7px;
  }
`;
