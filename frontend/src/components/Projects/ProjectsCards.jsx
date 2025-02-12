import React, { useState, useEffect } from "react";
import ProjectSearch from "./ProjectSearch";

const ProjectsCards = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Projects from Backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filtering Logic
  useEffect(() => {
    let filtered = projects;

    if (selectedLevel) {
      filtered = filtered.filter((project) => project.level === selectedLevel);
    }

    if (searchTerm) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedLevel, projects]);

  // Handle Filter Update
  const handleFilterUpdate = (newSearchTerm, newLevel) => {
    if (newSearchTerm !== null) setSearchTerm(newSearchTerm);
    if (newLevel !== null) setSelectedLevel(newLevel);
  };

  if (loading) return <p className="text-center text-lg">Loading projects...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      {/* Search & Filter Component */}
      <ProjectSearch onFilter={handleFilterUpdate} />

      {/* Project Cards */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-6 p-2">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="border h-90 border-black shadow-md rounded-md p-4 bg-amber-300 hover:scale-105 relative"
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
                  View Source
                </a>
              </button>
            </div>
            {project.imageUrl && (
              <img
                className="w-[300px] h-70 rounded"
                src={project.imageUrl}
                alt={project.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCards;
