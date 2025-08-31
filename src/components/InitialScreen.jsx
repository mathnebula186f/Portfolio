import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VaraText from "./VaraText";

const InitialScreen = ({ onComplete }) => {
  const [showQuote, setShowQuote] = useState(false);
  const [randomQuote, setRandomQuote] = useState("");
  const [isExiting, setIsExiting] = useState(false);

  const quotes = [
    "Hello Bhaaji ki haal chaal! ",
    "Welcome to the app bire!",
    "Hi there, nice to see you bhaaji!",
    "Greetings! How can I help you today bhaaji?",
    "Hey! Ready to get started bhaaji?",
    "Good to have you here bhaaji !!",
    "Hi, hope you're having a great day bhaaji!",
    "Welcome! Let's make something awesome bire.",
    "Hey there! bhaaji !!",
  ];

  useEffect(() => {
    // Select a random quote when component mounts
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);

    const timer = setTimeout(() => {
      setShowQuote(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showQuote) {
      // Show the random quote for 3 seconds, then start exit animation
      const quoteTimer = setTimeout(() => {
        setIsExiting(true);
        // Wait for exit animation to complete before calling onComplete
        setTimeout(() => {
          onComplete();
        }, 500); // Match the exit animation duration
      }, 2700);

      return () => clearTimeout(quoteTimer);
    }
  }, [showQuote, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 w-full"
    >
      <div className="text-center text-white w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          {showQuote && !isExiting && (
            <motion.div
              key="random-quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.5 }}
              className="mb-8 w-full flex justify-center items-center text-center"
            >
              <VaraText
                text={randomQuote}
                fontSize={48}
                strokeWidth={0.8}
                speed={0.6}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default InitialScreen;
