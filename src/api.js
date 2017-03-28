import "babel-polyfill";    // required for async/await
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import http from "http";
import compression from "compression";
import logger from "src/utils/logger";
import routes from "src/routes/index";
import modelsFactory from "src/models/index";
import { apiErrorHandler, apiErrorLogger } from "src/utils/express";


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
app.use(morgan("dev", { stream: { write: message => logger.info(message.trim()) } }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(initModels);
routes(app);
app.use(apiErrorLogger);
app.use(apiErrorHandler);

// start listening
startServer();
