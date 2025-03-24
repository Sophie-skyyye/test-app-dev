// Import the Express module
import express from 'express';

// Import the index controllers module
import { getCourses } from '../controllers/courses.js';

// Create an Express router
const router = express.Router();

// Create a GET route
router.get('/courses', getCourses);

// Export the router
export default router;
