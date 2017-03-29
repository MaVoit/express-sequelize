/* eslint-disable no-console */
const dotenv = require("dotenv-safe");

/**
 * Glue to generate config.json for sequelize.
 */
function getConfig() {
    const conf = dotenv.config().parsed;
    const env = process.env.NODE_ENV;

    const sequelizeConfig = {};
    sequelizeConfig[env] = {
        "url": conf.DATABASE_URL,
        "dialect": "postgres"
    };

    return sequelizeConfig;
}

const config = getConfig();

console.log(JSON.stringify(config));
