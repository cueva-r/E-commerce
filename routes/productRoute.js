const express = require('express')
const router = express.Router()
const { createProduct } = require("../controllers/productCtrl");

router.post("/", createProduct)

module.exports = router