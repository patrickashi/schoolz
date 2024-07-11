import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Homep from "./Pages/Homep";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index path="/" element={<Homep />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
