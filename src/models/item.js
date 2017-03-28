import uuid from "uuid";

export default (connector) => {

    const create = (data) => {
        return connector.create({
            uuid: uuid.v4(),
            title: data.title
        });
    };

    const list = (limit) => {
        return connector.list(limit);
    };

    return {
        create,
        list
    };
};
