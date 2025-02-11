import React, { useState } from "react";

const ProjectSearch = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeLevel, setActiveLevel] = useState("View All");

  const levels = ["View All", "Level 1", "Level 2", "Level 3"];

  const handleFilter = (level) => {
    setActiveLevel(level); // Set active button
    onFilter(null, level === "View All" ? "" : level);
  };

  return (
    <div>
      {/* Filter Buttons with Active State */}
      <div className="flex justify-center space-x-2 mt-4 flex-wrap">
        {levels.map((level, index) => (
          <button
            key={index}
            className={`btn px-4 py-2 rounded-md border ${
              activeLevel === level
                ? "bg-amber-400 text-white border-black shadow-md"
                : "bg-white text-black border-gray-300 hover:bg-amber-200"
            }`}
            onClick={() => handleFilter(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex mt-4 justify-center">
        <input
          type="text"
          placeholder="Search for a project"
          className="input bg-white w-[70%] border border-black rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onFilter(e.target.value, null); // Update search filter
          }}
        />
      </div>
    </div>
  );
};

export default ProjectSearch;
