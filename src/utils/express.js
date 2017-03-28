import HttpStatus from "http-status-codes";
import { omit } from "lodash/object";
import { Constants } from "src/constants";
import logger from "./logger";

/**
 * Can be used for wrapping async/await route handlers
 * so that it works with express error handling.
 * @param fn
 */
export const catchAsyncErrors = (fn) => {
    return (req, res, next) => {
        const routePromise = fn(req, res, next);
        routePromise.catch(next);
    };
};

const getErrorStatusCode = (err) => {
    if (err.statusCode) {
        return err.statusCode;
    }
    if (err.name === Constants.VALIDATION_ERROR) {
        return HttpStatus.UNPROCESSABLE_ENTITY;
    } else {
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
};

const getErrorCode = (err) => {
    return Constants.INTERNAL_ERROR;
};

export const apiErrorHandler = (err, req, res, next) => {
    const status = getErrorStatusCode(err);
    const code = getErrorCode(err);
    const message = err.message;
    res.status(status).json({ error: { code, message } });
};

export const apiErrorLogger = (err, req, res, next) => {
    const stack = err.stack;
    const error = omit(err, ["stack"]);
    const path = `${req.method} ${req.path}`;
    logger.error(error, path);
    logger.error(stack);
    next(err);
};
