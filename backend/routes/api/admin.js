import express from 'express';
import {
    getAllAdmin,
    adminRegister,
    adminLogin,
} from '../../controllers/adminController.js';

const router = express.Router();

router.route('/').get(getAllAdmin);

router.route('/register').post(adminRegister);

router.route('/login').post(adminLogin);

export default router;
