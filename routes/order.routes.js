/*ORDER ROUTES:
POST: /api/orders -> create a new order
GET: /api/orders/:userId -> get own orders
(admin only)
GET: api/orders -> get all the orders
GET: /api/orders/:id -> get a specific order by id
GET /api/orders/:userId -> get all orders for a specific user by id
*/

const express = require("express");
const router = express.Router();
const Order = require('../models/order.model');
const { isAdmin } = require('../middleware/admin.middleware');

router.post('/orders',  (req,res) => {
    Order.create(req.body)
    .then((order) => {
        res.status(201).json(order);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})

router.get('/orders/:userId' ,  (req,res) => {
    Order.find({userId: req.params.userId})
    .then((orders) => {
        res.status(200).json(orders);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})


//ADMIN ROUTES

router.get('/orders',  isAdmin, (req,res) => {
    Order.find()
    .then((orders) => {
        res.status(200).json(orders);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})

router.get('/orders/:id',    isAdmin, (req,res) => {
    Order.findById(req.params.id)
    .then((order) => {
        res.status(200).json(order);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})


    router.get('/orders/:userId', isAdmin, (req,res) => {
    Order.find({userId: req.params.userId})
    .then((orders) => {
        res.status(200).json(orders);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})

module.exports = router; 