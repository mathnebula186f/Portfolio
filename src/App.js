import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppNav from "./navigation/AppNav";
import ContactNav from "./navigation/ContactNav";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppNav />} />
        <Route path='/contact' element={<ContactNav/>} />
      </Routes>
    </Router>
  );
};

export default App;
