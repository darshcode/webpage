// import express
import express  from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

//ES fixes.
import path, {dirname} from 'path'
import { fileURLToPath } from "url";

//getting path from app to __dirname
const __dirname = dirname(fileURLToPath(import.meta.url))   

//import mongoose module
import mongoose from "mongoose";

//configuration module
import { secret, MongoURI } from "../config/config.js";


//import router
import indexRouter from './routes/index.routes.server.js'

// instantiate app-server s
const app = express();

// complete the DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//listen for connection succeses.
db.on('open', () => console.log("Connected to mongoDB."))
db.on('error', () => console.log("Mongo Connection Error."))

//setup viewEngine ejs
app.set('views',path.join(__dirname,'/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')));             //contains css and scripts uploaded to client.
app.use(session({
    secret: secret,
    saveUninitialized: false,
    resave: false
}))

// add middleware to connect application
app.use('/',indexRouter);

// run app
//app.listen(3000);

//console.log('Server running at http://localhost:3000');

export default app;