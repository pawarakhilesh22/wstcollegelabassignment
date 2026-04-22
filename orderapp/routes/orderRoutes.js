const express = require('express')
const router = express.Router()

const Order = require('../models/Order')

// CREATE
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body)
    const savedOrder = await order.save()
    res.json(savedOrder)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// READ
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(order)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.json({ message: "Order deleted" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router