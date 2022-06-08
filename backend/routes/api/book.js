import express from 'express';
import bookController from '../../controllers/bookController.js';

const router = express.Router();

router
    .route('/')
    .get(bookController.getAllBook)
    .post(bookController.createBook);

export default router;
