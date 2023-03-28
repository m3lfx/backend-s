const express = require('express');
const upload = require("../utils/multer");
const router = express.Router();

const { getProducts, 
        newProduct, 
        getSingleProduct, 
        updateProduct, 
        deleteProduct, 
        createProductReview, 
        getProductReviews, 
        getAdminProducts,
        deleteReview } = require('../controllers/productController');

const { isAuthenticatedUser,
        authorizeRoles 
    } = require('../middlewares/auth');

// router.get('/products', isAuthenticatedUser,authorizeRoles('admin'),getProducts);
// router.get('/products',  isAuthenticatedUser,  authorizeRoles('admin','user'), getProducts)
router.get('/products', getProducts)

router.get('/product/:id', getSingleProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), upload.array('images', 5), updateProduct).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);
router.put('/review', isAuthenticatedUser, createProductReview);
router.get('/reviews',isAuthenticatedUser, getProductReviews)
router.get('/reviews',isAuthenticatedUser, getProductReviews)
router.route('/reviews').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteReview)
router.get('/admin/products', isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
router.post('/admin/product/new', isAuthenticatedUser, authorizeRoles('admin'), upload.array('images', 5), newProduct);
module.exports = router;