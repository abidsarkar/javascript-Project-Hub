import React, { useState } from "react";

const ProjectUpload = () => {
  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Level 1");
  const [image, setImage] = useState(null);
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus("uploading...");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("level", level);
    formData.append("image", image);
    formData.append("source", source);
    formData.append("description", description);
    formData.append("technologies", technologies);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      // console.log("Project uploaded:", data);
      setUploadStatus("success");
      setTitle("");
      setLevel("Level 1");
      setImage(null);
      setSource("");
      setDescription("");
      setTechnologies("");
      document.getElementById("fileInput").value = "";
    } catch (error) {
      console.error("Error uploading project:", error);
      setUploadStatus("error");
    }
  };
  return (
    <div className="container mx-auto p-8">
      {" "}
      {/* Centered container */}
      <h2 className="text-2xl font-bold mb-4">Upload Your Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {" "}
        {/* Space between form elements */}
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full bg-amber-100 text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Level 1">Level 1</option>
          <option value="Level 2">Level 2</option>
          <option value="Level 3">Level 3</option>
        </select>
        <input
          type="text"
          placeholder="Github URL"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Add to your form */}
        <input
          type="text"
          placeholder="Description of the project"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Technologies used like HTML, CSS, JavaScript"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          type="submit"
          disabled={uploadStatus === "uploading"}
        >
          {uploadStatus === "uploading" ? "Uploading..." : "Upload Project"}
        </button>
        {uploadStatus === "success" && (
          <p className="text-green-500 mt-2">Project uploaded successfully!</p>
        )}
        {uploadStatus === "error" && (
          <p className="text-red-500 mt-2">
            Error uploading project. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ProjectUpload;
