import express from 'express';
import Admin from '../../models/adminModel.js';

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Admin.find({}, (err, data) => {
            if (err) return res.status(500).send(err);
            res.status(200).json(data);
        });
    })
    .post((req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        Admin.find({ email }, (err, data) => {
            if (err) return res.status(500).send(err);
            if (data.length === 0) {
                const adminId = data.length + 1;
                const dataAdmin = new Admin({ adminId, email, password });

                dataAdmin.save((err, data) => {
                    if (err) return res.status(500).send(err);
                    res.status(201).json(data);
                });
            } else {
                res.json({ error: 'Email Already Registered' });
            }
        });
    });

export default router;
