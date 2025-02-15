import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/projects/${id}`);
        if (!response.ok) throw new Error("Project not found");

        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (!project) return <p className="text-center text-red-500">Project not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Project Image */}
      <div className="relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-sm rounded-lg shadow-md">
          {project.level}
        </span>
      </div>

      {/* Project Details */}
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
        <p className="mt-2 text-gray-600">{project.description}</p>

        {/* Technologies Used */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View Source Code
          </a>
          <a
            href="/"
            className="bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
          >
            Back to Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
