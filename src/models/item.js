import uuid from "uuid";
import logger from "../utils/logger";

export default (connector) => {

    const create = (data) => {
        logger.debug("Creating item with data:", data);
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
