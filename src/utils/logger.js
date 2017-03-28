import winston from "winston";
import config from "./config";

winston.addColors({
    verbose: "grey",
    debug: "white",
    info: "green",
    warn: "yellow",
    error: "red"
});

const logger = new (winston.Logger)({
    level: config.log_level,
    transports: [
        new (winston.transports.Console)({
            colorize: "all",
            prettyPrint: true,
            handleExceptions: true
        })
    ]
});

export default logger;
