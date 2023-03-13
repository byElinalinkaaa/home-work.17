// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const Notification = () => {
//   const navigate = useNavigate();

//   return (
//     <Container>
//       <h2>Notifications</h2>
//       <Button onClick={() => navigate("/materials/detail/materials")}>
//         Go to Materials page
//       </Button>
//     </Container>
//   );
// };

// export default Notification;

// const Container = styled.div`
//   height: 100vh;
//   background-color: aquamarine;
//   padding: 10px;
//   margin: 0 15px;
// `;

// const Button = styled.button`
//   text-align: center;
//   padding: 10px 30px;
//   background-color: #19ae9f;
//   border: none;
//   border-radius: 20px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
// `;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// const AmouncementPage = () => {
//   const navigation = useNavigate();
//   const goToStudentsPage = () => {
//     navigation("/courses/students");
//   };
//   return (
//     <Container>
//       <h1>Anouncement Page</h1>
//       <StyledButton onClick={goToStudentsPage}>Go to Student Page</StyledButton>
//     </Container>
//   );
// };

// export default AmouncementPage;


// const Container = styled.div`
//   height: 100vh;
//   background-color:white;
//   padding: 10px;
//   margin: 15px 15px 0;
// `;

// const StyledButton = styled.button`
//   border-radius: 30px;
//   color: #eee7e7;
//   background-color: rgb(25, 174, 159);
//   padding: 15px 25px;
//   font-size: 20px;
//   border: none;
//   outline: none;
//   cursor: pointer;
// `;
import React from 'react'
 import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Notification = () => {
  const navigation = useNavigate();
     const goToStudentsPage = () => {
     navigation("/courses/students");
    };
  return (
    <Container>
      <h1>Notification Page</h1>
      <StyledButton onClick={goToStudentsPage}>Go to Student Page</StyledButton>
    </Container>
  );
}

export default Notification
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
