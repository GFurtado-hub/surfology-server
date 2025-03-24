/*USER ROUTES:
POST: /auth/signup -> {name,email,password}  user object
POST: /auth/login -> {email,password} auth token
GET: /auth/verify
(admin only)
GET: api/users -> get all the users
GET: api/users/:userId -> get specific user*/

const express = require("express");
const router = express.Router();
const User = require('../models/User.model');
const { isAdmin } = require('../middleware/admin.middleware');


// ADMIN ROUTES
router.get('/users', isAdmin, (req,res) => {
    User.find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})

router.get('users/:userId', isAdmin, (req,res) => {
    User.findById(req.params.userId)
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((error) => {
        res.status(400).json(error);
    })
})

module.exports = router; 