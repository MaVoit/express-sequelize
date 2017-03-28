import db from "src/db/schemas/index";
import itemConnector from "src/connectors/item";
import itemModel from "./item";
import versionModel from "./version";

export default (config) => {

    const item = itemModel(itemConnector(db));
    const version = versionModel();

    return {
        item,
        version
    };
};
