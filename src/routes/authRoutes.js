import express from 'express';
import authenticateUser from '../middlewares/authMiddleware.js';
import { getAllUsers } from '../controllers/getAllUsers.js';

const router = express.Router();

router.get('/all', authenticateUser, getAllUsers);

export default router;