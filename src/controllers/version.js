import { catchAsyncErrors } from "../utils/express";

/**
 * @apiGroup Version
 * @apiName getVersion
 * @api {get} /v1/version Get version info
 * @apiDescription Get version info
 *
 * @apiSuccess {String} status OK
 * @apiSuccess {String} boottime Time the API was booted, e.g. "2016-10-13T08:46:23.271Z"
 * @apiSuccess {String} uptime Seconds this API process has been running
 * @apiSuccess {String} branch Git branch name
 * @apiSuccess {String} commit Git commit hash
 * @apiSuccess {String} committime Git commit time, e.g. "2016-10-13 11:44:17 +0300"
 * @apiSuccess {String} buildtime Build time, e.g. "2016-10-13T08:46:10.771Z"
 */
const get = catchAsyncErrors(async(req, res, next) => {
    const data = await res.locals.data.models.version.get();
    res.json(data);
});

export default {
    get
};
