// import React from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { createPortal } from "react-dom";

// import styled from "styled-components";
// import Modal from "../../components/UI/Modal";

// const materials = [
//   {
//     title: "Material 1",
//     id: 1,
//   },
//   {
//     title: "Material 2",
//     id: 2,
//   },
// ];
// const Materials = ({onClick}) => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const navigate = useNavigate();

//   const openModalHandler = () => {
//     searchParams.set("modal", "addNewmaterial");
//     setSearchParams(searchParams);
//   };

//   const closeModalHandler = () => {
//     searchParams.delete("modal");
//     setSearchParams(searchParams);
//   };
//   return (
//     <>
//       {searchParams.has("modal") ? <button onClose={closeModalHandler} /> : null}
//       <BtnModal onClick={openModalHandler}>Add new material</BtnModal>
//       <Container>
//         <ul>
//           {materials.map((material) => (
//             <li key={material.id}>
//               <p>{material.title}</p>
//               <Btn onClick={() => navigate(`${material.id}/detail/UI/modal`)}>
//                 Details
//               </Btn>
//             </li>
//           ))}
//           return (
            
//           <>
//             {createPortal(
//               <Main>
//                 <h1>Add new material modal</h1>
//                 <p>
//                   The modal should open and close during operation according to
//                   searchParams, even opening the page updating
//                 </p>
//                 <button onClick={onClick}> Close Modal</button>
//               </Main>,
//               document.getElementById("modal")
//             )}
//           </>
//           )
//         </ul>
//       </Container>
//     </>
//   );
// };


// export default Materials;

// const Container = styled.div`
//   margin: 0px;
//   margin-left: 30px;
//   align-items: center;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   li {
//     border: 2px solid #4f4f70;
//     margin-top: 20px;
//     display: flex;
//     border-radius: 10px;
//     background-color: #9e2a74;
//     width: 700px;
//     font-family: sans-serif;
//     padding: 10px;
//     align-items: center;
//     justify-content: space-between;
//   }
// `;

// const Btn = styled.button`
//   text-align: center;
//   padding: 20px 30px;
//   background-color: #6b5be9;
//   border: none;
//   border-radius: 20px;
//   color: white;
//   font-weight: bold;
//   font-family: "Courier New", Courier, monospace;
//   cursor: pointer;
//   :hover {
//     background-color: #25087b;
//   }
// `;
// const BtnModal = styled.button`
//   text-align: center;
//   padding: 20px 30px;
//   margin-left: 700px;
//   background-color: #2d85bb;
//   border: none;
//   border-radius: 20px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   :hover {
//     background: purple;
//   }
// `;


// const Main = styled.div`
//   position: fixed;
// `;
import React from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const materials = [
  { title: "Material 1", id: 1 },
  { title: "Material 2", id: 2 },
];

const Materials = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const openModalHandler = () => {
    setSearchParams({ modal: "addNewmaterial" });
  };

  const closeModalHandler = () => {
    setSearchParams({});
  };

  return (
    <>
      {searchParams.get("modal") === "addNewmaterial" ? (
        <Modal onClose={closeModalHandler} />
      ) : null}
      <BtnModal onClick={openModalHandler}>Add new material</BtnModal>
      <Container>
        <ul>
          {materials.map((material) => (
            <li key={material.id}>
              <p>{material.title}</p>
              <Btn
                onClick={() =>
                  setSearchParams({ id: material.id, modal: "details" })
                }
              >
                Details
              </Btn>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

const Modal = ({ onClose }) => {
  return (
    <>
      {createPortal(
        <Main>
          <h1>Add new material modal</h1>
          <p>
            The modal should open and close during operation according to
            searchParams, even opening the page updating
          </p>
          <button onClick={onClose}> Close Modal</button>
        </Main>,
        document.getElementById("modal")
      )}
    </>
  );
};

const Container = styled.div`
  margin: 0px;
  margin-left: 30px;
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  li {
    border: 2px solid #4f4f70;
    margin-top: 20px;
    display: flex;
    border-radius: 10px;
    background-color: #9e2a74;
    width: 700px;
    font-family: sans-serif;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
  }
`;

const Btn = styled.button`
  text-align: center;
  padding: 20px 30px;
  background-color: #6b5be9;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
  :hover {
    background-color: #25087b;
  }
`;

const BtnModal = styled.button`
  text-align: center;
  padding: 20px 30px;
  margin-left: 700px;
  background-color: #2d85bb;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: purple;
  }
`;

const Main = styled.div`
  position: fixed;
`;

export default Materials;




// import React, { useState } from "react";
// import { createPortal } from "react-dom";
// import styled from "styled-components";

// const materials = [
//   { title: "Material 1", id: 1 },
//   { title: "Material 2", id: 2 },
// ];

// const Modal = ({ onClose }) => {
//   return (
//     <>
//       {createPortal(
//         <Main>
//           <h1>Add new material modal</h1>
//           <p>
//             The modal should open and close during operation according to
//             searchParams, even opening the page updating
//           </p>
//           <button onClick={onClose}>Close Modal</button>
//         </Main>,
//         document.getElementById("modal-root")
//       )}
//     </>
//   );
// };

// const Materials = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedMaterial, setSelectedMaterial] = useState(null);

//   const handleOpenModal = (material) => {
//     setSelectedMaterial(material);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       {showModal && (
//         <Modal onClose={handleCloseModal} selectedMaterial={selectedMaterial} />
//       )}
//       <Button onClick={() => handleOpenModal()}>Add new material</Button>
//       <Container>
//         <ul>
//           {materials.map((material) => (
//             <li key={material.id}>
//               <p>{material.title}</p>
//               <Button onClick={() => handleOpenModal(material)}>Details</Button>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </>
//   );
// };

// const Main = styled.div`
//   position: fixed;
// `;



// const Container = styled.div`
//   margin: 0px;
//   margin-left: 30px;
//   align-items: center;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   li {
//     border: 2px solid #4f4f70;
//     margin-top: 20px;
//     display: flex;
//     border-radius: 10px;
//     background-color: #9e2a74;
//     width: 700px;
//     font-family: sans-serif;
//     padding: 10px;
//     align-items: center;
//     justify-content: space-between;
//   }
// `;

// const Button = styled.button`
//   text-align: center;
//   padding: 20px 30px;
//   margin-left: 700px;
//   background-color: #2d85bb;
//   border: none;
//   border-radius: 20px;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   :hover {
//     background: purple;
//   }
// `;

// export default Materials;