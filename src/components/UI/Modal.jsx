import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = ({ onClick }) => {
  return (
    <>
      {createPortal(
        <Main>
          <h1>Add new material modal</h1>
          <p>
            The modal should open and close during operation according to
            searchParams, even opening the page updating
          </p>
          <button onClick={onClick}> Close Modal</button>
        </Main>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;

const Main = styled.div`
  position: fixed;
`;
