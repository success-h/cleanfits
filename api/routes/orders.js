const router = require("express").Router();
const Order = require("../models/Order");

// @GET
// Return users
router.get("/orders", (req, res) => {
  Order.find({})
    .then(orders => res.status(200).json({ success: true, orders }))
    .catch(err =>
      res.status(404).json({ error: true, errorMessage: err.message })
    );
});

// @POST
// Add pricing to list of products
router.post("/orders", (req, res) => {
  const { cart, subTotal, orderId, delivered, userEmail } = req.body;

  const order = new Order({
    cart,
    subTotal,
    orderId,
    delivered,
    userEmail
  });

  order
    .save()
    .then(order =>
      res.status(201).json({
        success: true,
        successMessage: "Order Created",
        order
      })
    )
    .catch(err => res.status(401).json({ error: true, message: err.message }));
});

module.exports = router;
