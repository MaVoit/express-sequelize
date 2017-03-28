/* eslint-disable import/prefer-default-export */

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
