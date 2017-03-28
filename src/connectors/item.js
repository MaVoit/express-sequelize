
export default (db) => {

    const create = (data) => {
        return db.Item.create(data);
    };

    const list = (data) => {
        return db.Item.all();
    };

    return {
        create,
        list
    };
};
