const Product = require('../models/ProductModel')
const asyncHandler = require('express-async-handler')

const createProduct = asyncHandler(async(req, res) => {
    res.json({
        message: "Product post router"
    })
})

module.exports = {createProduct}