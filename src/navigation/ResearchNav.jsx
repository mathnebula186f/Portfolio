import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

import researchData from "../Data/ResearchData.json";

const ResearchNav = () => {
  const { researchId } = useParams();
  const navigate = useNavigate();

  // Check if page is under construction
  const isUnderConstruction =
    process.env.REACT_APP_IS_PAGE_UNDER_CONSTRUCTION === "true";

  // Under Construction Page
  if (isUnderConstruction) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <NavBar />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl animate-ping"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Construction Image */}
            <div className="mb-8 relative">
              <div className="relative inline-block">
                <img
                  src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-website-under-construction-in-yellow-rounded-square-shape-with-black-line-png-image_9041997.png"
                  alt="Website Under Construction"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto animate-bounce"
                />
                {/* Glow effect behind image */}
                <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 mx-auto bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent animate-pulse">
              Under Construction
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              🚧I am building something amazing! 🚧
            </p>

            {/* Description */}
            <div className="mb-12 space-y-4">
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Research portal is currently undergoing exciting updates to
                bring you a better experience.
              </p>
              <p className="text-base text-gray-500">
                Stay tuned for something spectacular!
              </p>
            </div>

            {/* Animated Progress Bar */}
            {/* <div className="mb-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full animate-pulse"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div> */}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/")}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ← Back to Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <button
                onClick={() => window.location.reload()}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🔄 Check Again
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Contact Info */}
            <div
              className="mt-16 p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Need immediate assistance?
              </h3>
              <p className="text-gray-400">
                Feel free to reach out while we're working on the updates.
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-32 left-8 animate-float">
              <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
            </div>
            <div className="absolute top-48 right-12 animate-float delay-500">
              <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
            </div>
            <div className="absolute bottom-32 left-16 animate-float delay-1000">
              <div className="w-5 h-5 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Custom CSS for additional animations */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  const research = researchData[researchId];

  if (!research) {
    return (
      <div className="min-h-screen bg-black text-white">
        <NavBar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Research Not Found</h1>
          <p className="text-gray-400 mb-8">
            The research paper you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <NavBar />

      <div className="container mx-auto px-4 py-8 max-w-4xl mt-20">
        {/* Header Section */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/")}
            className="text-blue-400 hover:text-blue-300 mb-4 flex items-center gap-2 transition-colors"
          >
            ← Back to Home
          </button>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {research.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <span>By {research.author}</span>
            <span>•</span>
            <span>{research.date}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {research.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        {research.images && research.images[0] && (
          <div className="mb-8">
            <img
              src={research.images[0]}
              alt={research.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Abstract */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Abstract
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {research.abstract}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {research.content.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                {section.section}
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation to other research */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-semibold mb-4">Other Research Papers</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.values(researchData)
              .filter((item) => item.id !== researchId)
              .slice(0, 2)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/research/${item.id}`)}
                  className="bg-gray-900 p-4 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  <h4 className="font-semibold text-blue-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {item.abstract}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">{item.date}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchNav;
