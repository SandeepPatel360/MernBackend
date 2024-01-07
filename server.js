import express from 'express';
import dotenv from 'dotenv';
import  dbConnect  from './config/database.js';
import defaultData from './default.js';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app  = express();
const PORT = process.env.PORT||8000;


app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', Router)
dbConnect();

app.listen(PORT, () => console.log(`server runiing on port ${PORT}`));
defaultData();