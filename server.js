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

//import router
import indexRouter from './app/routes/index.routes.server.js'

// instantiate app-server
const app = express();

//setup viewEngine ejs
app.set('views',path.join(__dirname,'/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')));             //contains css and scripts uploaded to client.
app.use(session({
    secret: 'mySecret',
    saveUninitialized: false,
    resave: false
}))

// add middleware to connect application
app.use('/',indexRouter);

// run app
app.listen(3000);

console.log('Server running at http://localhost:3000');