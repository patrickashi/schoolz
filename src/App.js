import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Homep from "./Pages/Homep";
import Aboutp from "./Pages/Aboutp";
import Allcoursesp from "./Pages/Allcoursesp";
import Contactp from "./Pages/Contactp";
import Admissionp from "./Pages/Admissionp";
import Admissionformp from "./Pages/Admissionformp";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index path="/" element={<Homep />} />
            <Route path="/aboutp" element={<Aboutp />} />
            <Route path="/allcoursesp" element={<Allcoursesp />} />
            <Route path="/contactp" element={<Contactp />} />
            <Route path="/admissionp" element={<Admissionp />} />
            <Route path="/admissionformp" element={<Admissionformp />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
