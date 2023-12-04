import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
import db from "./configs/Database.js";
// import Model from './models/ModelUser.js'
dotenv.config()

// Router
import RouteAuth from './routers/RouteAuth.js';
import RouteRooms from './routers/RouteRooms.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

try {
    await db.authenticate();
    console.log("Database connected....");
    // await Model.sync();    
} catch (error) {
    console.log(error);
}

app.use(express.json());
app.use(cors());
app.use(cookieParser());   

app.use('/public/images', express.static(path.join(__dirname, 'public/images')))

app.use('/auth', RouteAuth);
app.use('/rooms', RouteRooms);

app.use('/', (req, res) => {
    res.send('Welcome to the server')
})

const PORT = 5001;
app.listen(process.env.PORT || PORT,() => console.log("Server running at port 5001...."));