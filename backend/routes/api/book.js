import express from 'express';
import Book from '../../models/bookModel.js';

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Book.aggregate([
            {
                $lookup: {
                    from: 'authorcollections',
                    localField: 'authorId',
                    foreignField: 'authorId',
                    as: 'author',
                },
            },
            {
                $unwind: '$author',
            },
            {
                $lookup: {
                    from: 'categorycollections',
                    localField: 'categoryId',
                    foreignField: 'categoryId',
                    as: 'category',
                },
            },
            {
                $unwind: '$category',
            },
            {
                $project: {
                    title: 1,
                    pages: 1,
                    synopsis: 1,
                    authorName: '$author.fullname',
                    category: '$category.name',
                    imagePath: 1,
                },
            },
        ]).exec((err, data) => {
            if (err) return res.status(500).send(err);
            res.status(200).json(data);
        });
    })
    .post((req, res) => {
        const title = req.body.title;
        const pages = req.body.pages;
        const synopsis = req.body.synopsis;
        const authorId = req.body.authorId;
        const categoryId = req.body.categoryId;
        const imagePath = req.body.imagePath;

        Book.find({ title }, (err, data) => {
            if (err) return res.status(500).send(err);
            if (data.length === 0) {
                const bookId = data.length + 1;
                const dataBook = new Book({
                    bookId,
                    title,
                    pages,
                    synopsis,
                    authorId,
                    categoryId,
                    imagePath,
                });

                dataBook.save((err, data) => {
                    if (err) return res.status(500).send(err);
                    res.status(201).json(data);
                });
            } else {
                res.json({ error: 'Book Already Exists' });
            }
        });
    });

export default router;
