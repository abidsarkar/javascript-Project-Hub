import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import ProjectSearch from "./ProjectSearch";
import data from "../../assets/Data/js_projects.json";

const ProjectsCards = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // Initialize filtered projects with static data
  useEffect(() => {
    setFilteredProjects(data);
  }, []);

  // Filtering Logic
  useEffect(() => {
    let filtered = data;

    if (selectedLevel) {
      filtered = filtered.filter((project) => project.level === selectedLevel);
    }

    if (searchTerm) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedLevel]);

  // Handle Filter Update
  const handleFilterUpdate = (newSearchTerm, newLevel) => {
    if (newSearchTerm !== null) setSearchTerm(newSearchTerm);
    if (newLevel !== null) setSelectedLevel(newLevel);
  };

  return (
    <div>
      {/* Search & Filter Component */}
      <ProjectSearch onFilter={handleFilterUpdate} />

      {/* Project Cards */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-6 p-2">
        {filteredProjects.map((project) => (
          <div
            key={project._id.$oid}
            className="border h-100 border-black shadow-md rounded-md p-4 bg-amber-300 hover:scale-105 relative"
          >
            <div className="absolute -top-4 -right-3 border p-0.5 bg-violet-300">
              {project.level}
            </div>
            <div className="flex justify-between flex-col items-center mb-2 gap-3">
              <h2 className="text-xl font-semibold block ">{project.title}</h2>
              <div className="flex gap-2 ">
                <button className="btn btn-primary">
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    View Source
                  </a>
                </button>
                {project.live_link && (
                  <button className="btn btn-secondary">
                    <a href={project.live_link} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </button>
                )}
              </div>
            </div>
            <NavLink to={`/project/${project._id.$oid}`}>
              {project.imageUrl && (
                <img
                  className="w-[300px] h-70 rounded cursor-pointer"
                  src={project.imageUrl}
                  alt={project.title}
                />
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
