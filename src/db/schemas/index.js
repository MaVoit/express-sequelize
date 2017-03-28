/* eslint-disable import/no-dynamic-require */

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../../../config/config.json`)[env];

const sequelize = new Sequelize(config.db_url);
const db = {};

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
