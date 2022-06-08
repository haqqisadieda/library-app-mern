import express from 'express';
import bcrypt from 'bcrypt';
import Admin from '../../models/adminModel.js';

const router = express.Router();

router.route('/').get((req, res) => {
    Admin.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(data);
    });
});

router.route('/register').post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    Admin.find({ email }, async (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.length === 0) {
            const adminId = data.length + 1;
            const hashedPwd = await bcrypt.hash(password, 10);

            const dataAdmin = new Admin({
                adminId,
                email,
                password: hashedPwd,
            });

            dataAdmin.save((err, data) => {
                if (err) return res.status(500).send(err);
                res.status(201).json(data);
            });
        } else {
            res.status(409).json({ error: 'Email Already Registered' });
        }
    });
});

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    Admin.find({ email }, async (err, data) => {
        if (err) return res.status(500).send(err);
        if (data.length === 0) {
            res.status(204).json({ error: 'Email Not Registered!' });
        } else {
            const match = await bcrypt.compare(password, data[0].password);
            if (!match)
                return res.status(401).json({ error: 'Wrong Password!' });
            res.status(202).json({ data });
        }
    });
});

export default router;
