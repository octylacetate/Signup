// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

import http from 'http';
import ngrok  from '@ngrok/ngrok'

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// http.createServer((req, res) => {
// 	res.writeHead(200, { 'Content-Type': 'text/html' });
// 	res.end('Congrats you have created an ngrok web server');
// }).listen(8080, () => console.log('Node.js web server at 8080 is running...'));

// ngrok.connect({ addr: 8080, authtoken_from_env: true })
// 	.then(listener => console.log(`Ingress established at: ${listener.url()}`));