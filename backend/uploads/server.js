const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const dotenv = require("dotenv");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "project-hub",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

// Define Project Schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, required: true, enum: ["Level 1", "Level 2", "Level 3"] },
  imageUrl: { type: String, required: true },
  source: String,
  live_link: String,
  description: String,
  technologies: [String],
  createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("js_project", projectSchema);

// Upload API Route
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { title, level, source, description, technologies } = req.body;
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "Image upload failed" });
    }

    const newProject = new Project({
      title,
      level,
      imageUrl: req.file.path, // Cloudinary image URL
      source,
      description,
      technologies: technologies ? technologies.split(",") : [],
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Fetch All Projects API
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});
app.get("/projects/:id", async (req, res) => {
  try {
    // console.log(req.params.id);
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found_from server.js" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
