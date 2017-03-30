/* eslint-disable no-console */
import config from "src/utils/config";
import exec from "./execShellCmd";

/**
 * Run Sequelize migration with correct db connection url.
 */
if (process.argv.length < 3) {
    throw new Error("Buh! Not enough arguments!");
}

const sequelizeOptions = process.argv[2];
const cmd = `sequelize --url ${config.DATABASE_URL} ${sequelizeOptions}`;
const out = exec(cmd);
console.log(out);
