import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppNav from "./navigation/AppNav";
import ContactNav from "./navigation/ContactNav";
import ResearchNav from "./navigation/ResearchNav";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppNav />} />
        <Route path="/contact" element={<ContactNav />} />
        <Route path="/research/:researchId" element={<ResearchNav />} />
      </Routes>
    </Router>
  );
};

export default App;
