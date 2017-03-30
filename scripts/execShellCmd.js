/* eslint-disable no-console */
const process = require("child_process");

/**
 * Run shell command and return result as string.
 */
function exec(command) {
    const args = command.trimRight().split(" ");
    const cmd = args.splice(0, 1);
    const opts = { encoding: "utf-8" };

    const child = process.spawnSync(cmd, args, opts);
    if (child.status !== 0) {
        console.log(child.stderr);
        throw new Error("Exit code " + child.status);
    }

    return child.stdout;
}

module.exports = exec;
