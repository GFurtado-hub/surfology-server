/*PRODUCT ROUTES:
GET: /api/surfboards -> find all the products
GET: /api/surfboards/:id -> find a specific product
(admin only)
POST: /api/surfboards -> create a product
PUT: /api/surfnoards/:id -> update product
DELETE: /api/surfboards/:id -> delete produc*/

const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const { isAdmin } = require( '../middleware/admin.middleware');

router.get("/surfoards", (req,res) => {
    Product.find() 
    .then((products) => {
        res.status(200).json(products);
    })
    }
)

router.get("/surfboards/:id",  (req,res) => {
    Product.findById(req.params.id)
    .then((product) => {
        res.status(200).json(product);
    })
})


// ADMIN ROUTES

router.post("/surfboards",  isAdmin, (req,res) => {
    Product.create(req.body)
    .then((product) => {
        res.status(201).json(product);
    })
})

router.put("/surfboards/:id", isAdmin, (req,res) => {
    Product.findByIdAndUpdate(req.params)
    .then((product) => {
        res.status(200).json(product);
    })
})

router.delete("/surfboards/:id",  isAdmin, (req,res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(() => {
        res.status(204).json();
    })
})

module.exports = router; 