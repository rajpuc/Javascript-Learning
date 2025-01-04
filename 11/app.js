import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import {rateLimit} from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import cookieParser from 'cookie-parser';

import router from './routes/api.js';
import { PORT, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME } from './config/config.js';
const app = express();

//Dorun akhane apni rate limite use korben:
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME , // Ai j aikhane ami sob uppercase a likhlam atar mane atai bujai j agula constant and aigula birer kono file tekhe ashbe.
    max: REQUEST_LIMIT_NUMBER,
    // "windowsMs" define kore koto mili second a "max" define kore shorvocco koita request patate parbe akjon user. 
})

//akhon ai limiter k amader app a use korte hobe:
app.use(limiter);
app.use("/api",router); 

//tarpor aikhane amra helmet and hpp use korte pari amader appa a.
app.use(helmet());
app.use(hpp());
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
});