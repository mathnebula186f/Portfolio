import React from "react";
import ProfilePhoto from '../images/MyPhoto.png';

const Profile = () => {
  return (
    <div className=" bg-teal-500 bg-opacity-90  rounded-3xl max-w-90 mx-auto  flex items-center justify-between px-1 md:px-24 py-1 md:py-8 h-300 hover:bg-opacity-100">
      <div className=" flex-grow ">
        <h1 className="text-white text-2xl sm:text-5xl font-bold mb-4 ">Gopal Bansal</h1>
        <p className="text-white text-sm sm:text-lg font-light">
          I'm a  Developer, Programmer, and a Basketballer.
        </p>
      </div>
      <div className="w-4/12 sm:w-3/12 bg-white rounded-full overflow-hidden">
        <img src={ProfilePhoto} alt="Profile" />
      </div>
    </div>
  );
};

export default Profile;
