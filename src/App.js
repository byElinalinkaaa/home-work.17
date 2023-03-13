import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Anouncements from "./pages/Anouncements";

import "./App.css";
import Detail from "./navbar/materials/details/Detail";
import Late from "./navbar/materials/details/Late";
import Submitted from "./navbar/materials/details/Submitted";
import Waiting from "./navbar/materials/details/Waiting";
import Materials from "./navbar/materials/Materials";
import Ratings from "./navbar/ratings/Ratings";
import StudentsDetail from "./navbar/students/StudentDetails";
import Students from "./navbar/students/Students";
import Courses from "./pages/Courses";
import Schedule from "./pages/Schedule";
import Notification from "./pages/Notification";
import SideBar from "./components/sidebar/SideBar";
// import Navbar from "./navbar/NavBar";

const App = () => {
  return (
    <>
      <HashRouter>
        <SideBar>
          <Routes>
            <Route path="/courses/" element={<Courses />}>
              <Route path="materials/" element={<Materials />} />
              <Route path="materials/:materialId/details" element={<Detail />}>
                <Route path="submitted" element={<Submitted />} />
                <Route path="waiting" element={<Waiting />} />
                <Route path="late" element={<Late />} />
              </Route>
              <Route path="students" element={<Students />} />
              <Route
                path="students/:studentId/detail"
                element={<StudentsDetail />}
              />
              {/* <Navbar/> */}
              <Route path="ratings" element={<Ratings />} />
            </Route>
            <Route path="/anouncements" element={<Anouncements />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<Navigate to="/courses/materials" />} />
          </Routes>
        </SideBar>
      </HashRouter>
    </>
  );
};

export default App;
