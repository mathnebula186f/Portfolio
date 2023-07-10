import React from "react";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <div className="section">
        <Navbar />
      </div>
      <div className="section ">
        <Profile />
      </div>

      {/* Rest of your website content */}
    </div>
  );
};

export default App;
