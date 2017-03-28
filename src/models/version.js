import moment from "moment";
const versionBase = require("../../version.json");

export default () => {

    const get = () => {
        const uptime = Math.floor(process.uptime());
        const boottime = moment(new Date().getTime() - uptime * 1000).utc().format();
        const dynamic = { status: "ok", boottime, uptime };
        const data = Object.assign(dynamic, versionBase);
        return data;
    };

    return {
        get
    };
};
