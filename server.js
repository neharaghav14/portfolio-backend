// server.js (portfolio-backend/)
import express from 'express';
import cors from 'cors';
import aboutRoutes from './routes/aboutRoutes.js';  // import add

const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'https://neharaghav-portfolio.vercel.app'] }));
app.use(express.json());

app.use('/about', aboutRoutes);  // route mount

app.listen(5000, () => console.log('Backend: http://localhost:5000/about'));
