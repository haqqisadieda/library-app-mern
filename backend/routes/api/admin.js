import express from 'express';
import adminController from '../../controllers/adminController.js';

const router = express.Router();

router.route('/').get(adminController.getAllAdmin);

router.route('/register').post(adminController.adminRegister);

router.route('/login').post(adminController.adminLogin);

export default router;
