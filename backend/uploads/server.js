const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files from 'uploads'

// MongoDB Connection (using environment variable)
const MONGODB_URI = process.env.MONGODB_URI; // Get URI from .env
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Project Schema (improved - see previous response for details)
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  level: { type: String, required: true, enum: ['Level 1', 'Level 2', 'Level 3'] },
  imagePath: String, // Optional
  source: String,   // Optional
  description: String, // Optional
  technologies: [String], // Optional
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

projectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Project = mongoose.model('Project', projectSchema);

// Multer configuration for file upload (improved)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store uploads in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // More robust filename
  }
});

const upload = multer({ storage: storage,  limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit

// Upload Endpoint (improved - handles missing fields and errors)
app.post('/uploads', upload.single('image'), async (req, res) => {
  try {
    const { title, level, source, description, technologies } = req.body; // Get all fields

    if (!title || !level) { // Validate required fields
      return res.status(400).json({ error: 'Title and level are required' });
    }

    const newProject = new Project({
      title,
      level,
      imagePath: req.file ? req.file.path : undefined, // Handle case where no image is uploaded
      source,
      description,
      technologies
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject); // Send the saved project data back
  } catch (error) {
    console.error('Error saving project:', error);
    res.status(500).json({ error: error.message || 'Server error' }); // Send a more specific error message if available
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});