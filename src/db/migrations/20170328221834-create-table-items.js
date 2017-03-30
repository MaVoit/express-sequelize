require("babel-core/register");
const db = require("../schemas/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable(db.Item.tableName, db.Item.attributes);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable(db.Item.tableName);
    }
};
