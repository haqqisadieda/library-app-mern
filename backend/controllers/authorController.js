import Author from '../models/authorModel.js';

const getAllAuthor = (req, res) => {
    Author.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(data);
    });
};

const createAuthor = (req, res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const fullname = name + ' ' + surname;

    Author.find({ fullname }, (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.length === 0) {
            Author.find({}, (err, data) => {
                if (err) return res.status(500).send(err);
                const authorId = data.length + 1;
                const dataAuthor = new Author({
                    authorId,
                    name,
                    surname,
                    fullname,
                });

                dataAuthor.save((err, data) => {
                    if (err) return res.status(500).send(err);
                    res.status(201).json(data);
                });
            });
        } else {
            res.json({ error: 'Author Already Exists' });
        }
    });
};

export default { getAllAuthor, createAuthor };
