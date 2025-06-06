import React from "react";
import NavBar from "../components/NavBar.jsx";
import Profile from "../components/Profile";
import cardData from "../Data/Cards.json";
import Cards from "../components/Cards";

const AppNav = () => {
  return (
    <div className="text-center p-8 bg-black  flex flex-col">
      <div className="">
        <NavBar />
      </div>
      <div className="flex-grow  mx-auto max-w-screen-lg py-12 mt-12">
        <Profile />
      </div>
      <div>
        <Cards data={cardData} />
      </div>
    </div>
  );
};

export default AppNav;
