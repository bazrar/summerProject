const path = require('path');
const router = require('express').Router();
const {products}  = require('../routes/admin');

const rootDir = require('../utils/path');


router.get('/', (req,res,next) => {
    // console.log(products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {prods: products, pageTitle: 'Shop', path:'/home'})
});

module.exports = router;
