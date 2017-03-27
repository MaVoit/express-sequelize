import db from "../db/models/index"
import itemConnector from "../connectors/item";
import itemModel from "./item";

export default (config) => {

    const item = itemModel(itemConnector(db));

    return { item };
};