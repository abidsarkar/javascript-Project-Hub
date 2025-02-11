import React, { useState, useEffect } from "react";
import projectsData from "../../data/projects.json";
import ProjectSearch from "./ProjectSearch";

// Load images dynamically
const images = import.meta.glob("../../assets/projectsimg/*", { eager: true });

const ProjectsCards = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // Filtering Logic
  useEffect(() => {
    let filtered = projectsData;

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
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4">
        {filteredProjects.map((project) => {
          const imagePath =
            images[`../../assets/projectsimg/${project.image}`]?.default;

          return (
            <div
              key={project.id}
              className="border border-black shadow-md rounded-md p-4 bg-amber-300 hover:scale-105 relative"
            >
              <div className="absolute -top-4 -right-3 border p-0.5 bg-violet-300">
                {project.level}
              </div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <button className="btn btn-primary">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Sources
                  </a>
                </button>
              </div>
              {imagePath && (
                <img
                  className="w-[300px]"
                  src={imagePath}
                  alt={project.title}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsCards;
