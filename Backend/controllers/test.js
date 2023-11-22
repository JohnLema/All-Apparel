const express = require ('express')
const router = express.Router()
const Product = require('../models/test')

 router.get('/', async (req, res) => {
     const products = await Product.find()
})

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id)
})

module.exports = router