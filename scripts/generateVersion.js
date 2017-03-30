/* eslint-disable no-console */
const exec = require("./execShellCmd");
const moment = require("moment");

/**
 * Generate version information. This must be ES5, so we can easily
 * run it on our Jenkins host (inside a docker container is not ok, as the
 * git context doesn't exist there).
 */
function getVersionInfo() {
    const branch = exec("git rev-parse --abbrev-ref HEAD").trimRight();
    const commit = exec("git rev-parse HEAD").trimRight();
    const rawcommittime = exec("git show -s --format=%ci HEAD").trimRight();
    // A hack to overcome git date format weirdness
    const committimeiso8601 = rawcommittime.replace(" ", "T").replace(" ", "");
    const committime = moment(committimeiso8601).utc().format();
    const buildtime = moment().utc().format();
    return { branch, commit, committime, buildtime };
}

console.log(JSON.stringify(getVersionInfo()));
