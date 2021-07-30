import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
dotenv.config()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || "3001";


app.get('/', (req, res)=>{
    res.send("Welcome to The WaterCo API");
});

app.listen(port, ()=>{
    console.log(`WaterCo API Running on Port ${port}`);
});


// // Add headers
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '127.0.0.1:5501');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'origin', 'Authorization');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     if ('OPTIONS' == req.method) {
//       res.sendStatus(200);
//     }
//     else {
//       next();
//     }});

export default app;