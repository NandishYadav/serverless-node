const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const v1Routes = require("./routes/index");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next)=> {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", true);
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
	);
	next();
});

app.use("*", (req, res, next) => {
    console.log("->",req.method, req.originalUrl);
    next();
});


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use("/api", v1Routes);



app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});



exports.handler = serverless(app);
