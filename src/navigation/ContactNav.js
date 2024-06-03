import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/NavBar";

function ContactNav() {
  return (
    <div className="text-center p-8 bg-black  flex flex-col h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-grow  py-12 mt-12">
        <Contact />
      </div>
    </div>
  );
}

export default ContactNav;
