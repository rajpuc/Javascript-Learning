import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import * as path from 'path';
import router from './routes/api.js';
import { PORT,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME,WEB_CACHE,MAX_JSON_SIZE,URL_ENCODED } from './app/config/config.js';
import fileUpload from 'express-fileupload';


const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODED}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
app.use(fileUpload({
    limits:{
        fileSize:58*1024*1024
    }
}))

//Rate Limiter
const limiter=rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max:REQUEST_LIMIT_NUMBER
})
app.use(limiter);

//Web caching
app.set('etag',WEB_CACHE)

//MongoDB Connection
/**
 * You need to connect MongoDB here.
 */

//Set API Routes
app.use("/api",router);

//Run your Express Backend Project
app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
})