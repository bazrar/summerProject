const path = require('path')
const express = require('express');
const rootDir = require('../utils/path')
const router = express.Router(); 

const products = [];

router.get('/add-product', (req,res,next) => {
    res.render('add-product', {pageTitle:'Add Product', path:'/admin/add-product'})
});

router.post('/product', (req, res, next) => {
    products.push(req.body.title)
    res.redirect('/')
});


exports.route = router; 
exports.products = products