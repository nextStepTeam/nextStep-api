import express from 'express';
import corsMiddleware from './middleware/cors.js'; 
import exampleRoutes from './routes/exampleRoutes.js'; 
import connectDB from './config/db.js';

const app = express();
const port = 8000;

connectDB();

app.use(corsMiddleware);

app.use(express.json());

app.use('/example', exampleRoutes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
