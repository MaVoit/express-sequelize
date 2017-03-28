/* eslint-disable no-console */

/**
 * Generate version information. This must be ES5, so we can easily
 * run it on our Jenkins host (inside a docker container is not ok, as the
 * git context doesn't exist there).
 */
const spawnSync = require("child_process").spawnSync;
const moment = require("moment");

function getOutput(command) {
    const args = command.split(" ");
    const cmd = args.splice(0, 1);
    const opts = { encoding: "utf-8" };
    const child = spawnSync(cmd, args, opts);
    if (child.status !== 0) {
        throw new Error("Exit code " + child.status);
    }
    return child.stdout;
}

function getVersionInfo() {
    const branch = getOutput("git rev-parse --abbrev-ref HEAD").trimRight();
    const commit = getOutput("git rev-parse HEAD").trimRight();
    const rawcommittime = getOutput("git show -s --format=%ci HEAD").trimRight();
    // A hack to overcome git date format weirdness
    const committimeiso8601 = rawcommittime.replace(" ", "T").replace(" ", "");
    const committime = moment(committimeiso8601).utc().format();
    const buildtime = moment().utc().format();
    return { branch, commit, committime, buildtime };
}

const version = getVersionInfo();

console.log(JSON.stringify(version));
