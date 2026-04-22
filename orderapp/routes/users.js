const express = require('express')
const router = express.Router()

const Order = require('../models/Order')

/* ADD + SAVE ORDER */
router.post('/add', async (req, res) => {
  try {

    const order = new Order({
      orderId: req.body.orderId,
      productName: req.body.productName,
      quantity: req.body.quantity,
      price: req.body.price
    })

    const savedOrder = await order.save()

    res.json({
      message: "Order Saved Successfully",
      data: savedOrder
    })

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

/* UPDATE ORDER */
router.put('/update/:id', async (req, res) => {
  try {

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json({
      message: "Order Updated Successfully",
      data: order
    })

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

/* DELETE ORDER */
router.delete('/delete/:id', async (req, res) => {
  try {

    await Order.findByIdAndDelete(req.params.id)

    res.json({
      message: "Order Deleted Successfully"
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router