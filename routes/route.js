import express from 'express';
import {userSignup, userLogin} from '../controller/userController.js'
import {getProduct, getProductById} from '../controller/productController.js'
const router  = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProduct);
router.get('/product/:id', getProductById);
export default router;