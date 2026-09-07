import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { startDB } from './src/config/database.js';
import "dotenv/config";


const app= express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, async() => {
    await startDB();
    console.log(`Servidor listo http://localhost:${PORT}`);
})