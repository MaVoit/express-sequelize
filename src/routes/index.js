import item from "../controllers/item"

export default (app) => {

    app.post('/v1/items', item.create);
    app.get('/v1/items', item.list);

    // default catch-all route
    app.get('*', (req, res) => res.status(200).send({
        message: 'Welcome to the beginning of New',
    }));
};