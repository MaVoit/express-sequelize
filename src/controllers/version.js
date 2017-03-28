import moment from "moment";
import { catchAsyncErrors } from "../utils/ExpressHelper";

const versionBase = require("../../version.json");

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
    const uptime = Math.floor(process.uptime());
    const boottime = moment(new Date().getTime() - uptime * 1000).utc().format();
    const dynamic = { status: "ok", boottime, uptime };
    const data = Object.assign(dynamic, versionBase);
    res.json(data);
});

export default {
    get
};
