import "babel-polyfill";    // required for async/await
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import http from "http";
import routes from "./routes/index";
import modelsFactory from "./models/index";


const initModels = (req, res, next) => {
    const models = modelsFactory({});
    res.locals.data = { models };
    next();
};

const startServer = (options) => {
    const port = parseInt(process.env.PORT, 10) || 8000;
    app.set("port", port);

    const server = http.createServer(app);
    server.listen(port);
};

// Set up the express app
const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(initModels);

// load defined routes
routes(app);

// start listening
startServer();
