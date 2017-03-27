
const create = (req, res) => {

    const data = {
        title: req.body.title || "test"
    };

    return res.locals.data.models.item
    .create(data)
    .then(created => res.status(201).send(created))
    .catch(error => res.status(400).send(error));
};

const list = (req, res) => {
    return res.locals.data.models.item
    .list()
    .then(items => res.status(201).send(items))
    .catch(error => res.status(400).send(error));
};


export default {
    create,
    list
};