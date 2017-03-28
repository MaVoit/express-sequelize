import item from "src/controllers/item";
import version from "src/controllers/version";

export default (app) => {

    app.post("/v1/items", item.create);
    app.get("/v1/items", item.list);
    app.get("/v1/version", version.get);

    // default catch-all route
    app.get("*", (req, res) => res.status(200).send({
        message: "Welcome to the beginning of New"
    }));
};
