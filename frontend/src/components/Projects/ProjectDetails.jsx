import React from "react";
import { useParams, Link } from "react-router";
import data from "../../assets/Data/js_projects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find((proj) => proj._id.$oid === id);

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
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Live Demo
            </a>
          )}
          <Link
            to="/"
            className="bg-gray-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-gray-600 transition"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;