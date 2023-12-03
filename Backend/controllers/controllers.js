const express = require ('express')
const router = express.Router()
const bodyParser = require('body-parser');
const db = require("../models")
const { Pool } = require('pg');

const dbschema = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

router.get('/', async (req, res) => {
    let product = req.products
    if (isNaN(product)) {
        res.status(404).json
    } else {
        res.json(product)
    }
})

//add to cart
router.post('/checkout', async (req, res) => {
    try {
      const { product_id, quantity } = req.body;
  
      if (!product_id || !quantity || quantity <= 0) {
        return res.status(400).json({ error: 'Invalid request body' });
      }
  
      const productExists = await dbschema.query('SELECT * FROM products WHERE product_id = $1', [product_id]);
  
      if (productExists.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      const result = await dbschema.query(
        'INSERT INTO cart_items (product_id, quantity) VALUES ($1, $2) RETURNING *',
        [product_id, quantity]
      );
  
      const cartItem = result.rows[0];
  
      res.status(201).json({ message: 'Item added to the shopping cart', item: cartItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

//confirm order
router.post('/confirm', async (req, res) => {
  await fetch ('http://localhost:3000/confirm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(req.body)
  })
})

async function deleteItem() {
  await fetch (`http://localhost:3000/Checkout/${item.id}`, {
    method: 'DELETE'
  })
  history.push('/Checkout')
}