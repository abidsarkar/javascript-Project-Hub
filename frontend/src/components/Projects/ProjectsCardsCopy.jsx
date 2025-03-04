import React, { useState, useEffect } from "react";
import ProjectSearch from "./ProjectSearch";
const ProjectsCardsCopy = () => {
  const [projects, setProjects] = useState([]); // Store projects from the server
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);   // Error state

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(`${import.meta.env.VITE_DOWNLOAD_URL}`); // Replace with your API endpoint
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch projects.');
        }
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data); // Initialize filtered projects with all projects
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message); // Set the error message
      } finally {
        setLoading(false); // Set loading to false after fetch (success or error)
      }
    };

    fetchProjects();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Filtering Logic (now uses projects from server)
  useEffect(() => {
    let filtered = projects; // Use the projects from the server

    if (selectedLevel) {
      filtered = filtered.filter((project) => project.level === selectedLevel);
    }

    if (searchTerm) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedLevel, projects]); // Add projects to the dependency array

  const handleFilterUpdate = (newSearchTerm, newLevel) => {
    setSearchTerm(newSearchTerm);
    setSelectedLevel(newLevel);
  };

  if (loading) {
    return <div>Loading projects...</div>; // Display a loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message
  }

  return (
    <div>
      <ProjectSearch onFilter={handleFilterUpdate} />
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-4">
        {filteredProjects.map((project) => {
          // Construct image URL (assuming imagePath is relative to /uploads)
          const imageUrl = project.imagePath ? `http://localhost:5000/${project.imagePath}` : null; // Adjust URL as needed

          return (
            <div
              key={project._id} // Use _id from MongoDB
              className="border border-black shadow-md rounded-md p-4 bg-amber-300 hover:scale-105 relative"
            >
              <div className="absolute -top-4 -right-3 border p-0.5 bg-violet-300">
                {project.level}
              </div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <button className="btn btn-primary">
                  <a href={project.source} target="_blank" rel="noopener noreferrer">
                    View Sources
                  </a>
                </button>
              </div>
              {imageUrl && ( // Conditionally render the image
                <img className="w-[300px]" src={imageUrl} alt={project.title} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsCardsCopy;