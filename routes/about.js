// Import the Express module
import express from 'express';

// Import the index controllers module
import { getAbout } from '../controllers/about.js';

// Create an Express router
const router = express.Router();

// Create a GET route
router.get('/about', getAbout);

// Export the router
export default router;
