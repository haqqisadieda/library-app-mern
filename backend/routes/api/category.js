import express from 'express';
import categoryController from '../../controllers/categoryController.js';

const router = express.Router();

router
    .route('/')
    .get(categoryController.getAllCategory)
    .post(categoryController.createCategory);

export default router;
