import Category from '../models/categoryModel.js';

const getAllCategory = (req, res) => {
    Category.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(data);
    });
};

const createCategory = (req, res) => {
    const name = req.body.name;

    Category.find({ name }, (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.length === 0) {
            Category.find({}, (err, data) => {
                if (err) return res.status(500).send(err);
                const categoryId = data.length + 1;
                const dataCategory = new Category({ categoryId, name });

                dataCategory.save((err, data) => {
                    if (err) return res.status(500).send(err);
                    res.status(201).json(data);
                });
            });
        } else {
            res.json({ error: 'Category Already Exists' });
        }
    });
};

export default { getAllCategory, createCategory };
