import express from 'express';
import authorController from '../../controllers/authorController.js';

const router = express.Router();

router
    .route('/')
    .get(authorController.getAllAuthor)
    .post(authorController.createAuthor);

export default router;
