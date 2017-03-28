import { catchAsyncErrors } from "src/utils/express";
import { Defaults } from "src/constants";

const create = catchAsyncErrors(async(req, res, next) => {

    const data = {
        title: req.body.title || "test"
    };

    const created = await res.locals.data.models.item.create(data);
    res.status(201).json(created);
});

const list = catchAsyncErrors(async(req, res, next) => {
    const limit = req.query.limit || Defaults.LIMIT;
    const items = await res.locals.data.models.item.list(limit);
    res.status(201).json(items);
});


export default {
    create,
    list
};
