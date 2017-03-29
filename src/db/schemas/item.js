export default (sequelize, DataTypes) => {

    const Item = sequelize.define("Item", {
        uuid: {
            allowNull: false,
            type: DataTypes.UUID
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: { min: 3, max: 255 }
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ["uuid"]
            }
        ]
    });

    // FIXME remove this when schema is stable
    // TODO Use migration for schema migration instead
    // Item.sync({ force: true, match: "foo_dev" });

    return Item;
};
