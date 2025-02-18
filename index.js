// Import dependencies
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './src/databaseConnection.js';
import userRouter from './src/routes/userRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
connectDB();
app.use('/api/users', userRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

