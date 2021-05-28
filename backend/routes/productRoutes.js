import express from "express"
const router = express.Router()
import Product from "../models/productModel.js"

// @desc Fetch all Products
// @route GET /api/products
// @access Public

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.send(products);
    } catch (err) {
        res.status(500).send({ err: err.message })
    }
});

// @desc Fetch single Product
// @route GET /api/products/:id
// @access Public

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (product) {
            res.send(product);
        } else {
            res.status(404).json({ message: "Product not found" })
        }
    } catch (err) {
        res.sendStatus(500)
    }
});

export default router