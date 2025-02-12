const express = require('express')
const router = express.Router()

const productcontroller = require('../controllers/product')

router.get('/products', productcontroller.index)

router.get('/product/:id', productcontroller.show)

router.post('/product', productcontroller.store)
  
router.put('/product/:id', productcontroller.update)
  
router.delete('/product/:id', productcontroller.delete)

module.exports = router