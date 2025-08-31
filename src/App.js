import React, { memo } from "react";
import { Routes, Route } from "react-router-dom";
import AppNav from "./navigation/AppNav";
import ContactNav from "./navigation/ContactNav";
import ResearchNav from "./navigation/ResearchNav";
import { useState } from "react";
import InitialScreen from "./components/InitialScreen";
import { AnimatePresence } from "framer-motion";

const App = memo(() => {
  const [showInitialScreen, setShowInitialScreen] = useState(true);
  const handleInitialScreenComplete = () => {
    setShowInitialScreen(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showInitialScreen && (
          <InitialScreen
            key="initial-screen"
            onComplete={handleInitialScreenComplete}
          />
        )}
      </AnimatePresence>

      {!showInitialScreen && (
        <Routes>
          <Route path="/" element={<AppNav />} />
          <Route path="/contact" element={<ContactNav />} />
          <Route path="/research/:researchId" element={<ResearchNav />} />
        </Routes>
      )}
    </>
  );
});

export default App;
