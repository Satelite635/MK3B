const express = require('express')
const router = express.Router()

const ordercontroller = require('../controllers/order')

router.get('/orders', ordercontroller.index)

router.get('/order/:id', ordercontroller.show)

router.post('/order', ordercontroller.store)
  
router.put('/order/:id', ordercontroller.update)
  
router.delete('/order/:id', ordercontroller.delete)

module.exports = router