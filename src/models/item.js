import uuid from "uuid";

export default (connector) => {

    const create = (data) => {
        return connector.create({
            uuid: uuid.v4(),
            title: data.title
        });
    };

    const list = () => {
        return connector.list();
    };

    return {
        create,
        list
    };
};