import "babel-polyfill";    // required for async/await
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import http from "http";
import compression from "compression";
import routes from "./routes/index";
import modelsFactory from "./models/index";
import { apiErrorHandler, apiErrorLogger } from "./utils/ExpressHelper";


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
app.use(compression());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(initModels);
routes(app);
app.use(apiErrorLogger);
app.use(apiErrorHandler);

// start listening
startServer();
