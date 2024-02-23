const express = require('express')
const router = express.Router()
const {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct
} = require("../controllers/productCtrl");

router.post("/", createProduct)
router.get("/:id", getaProduct)
router.put("/:id", updateProduct)
router.get("/", getAllProduct)

module.exports = router