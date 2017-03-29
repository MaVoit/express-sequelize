import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import logger from "src/utils/logger";
import config from "src/utils/config";

const basename = path.basename(module.filename);
const sequelize = new Sequelize(config.DATABASE_URL, { logging: logger.debug });
const db = {};

logger.info("Using database url:", config.DATABASE_URL);

const getSchemaFiles = () => {
    return fs
    .readdirSync(__dirname)
    .filter(file =>
    (file.indexOf(".") !== 0) &&
    (file !== basename) &&
    (file.slice(-3) === ".js"));
};

getSchemaFiles()
.forEach((file) => {
    const schema = sequelize.import(path.join(__dirname, file));
    db[schema.name] = schema;
});

Object.keys(db).forEach((schemaName) => {
    if (db[schemaName].associate) {
        db[schemaName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
