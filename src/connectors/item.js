
export default (db) => {

    const create = (data) => {
        return db.Item.create(data);
    };

    const list = (limit) => {
        return db.Item.findAll({ limit });
    };

    return {
        create,
        list
    };
};
