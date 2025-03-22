const express = require('express');
const User = require('../models/User.model');
const router = express.Router();
const { isAdmin } = require('../middleware/admin.middleware');


// Route to make a user an admin
router.post('/make-admin/:userId', isAdmin, async (req, res) => {
    const { userId } = req.params; 
    try {
      const user = await User.findById(userId); 
      if (!user) {
        return res.status(404).send('User not found'); 
      }
      user.role = 'admin'; 
      await user.save(); 
  
      res.status(200).send('User is now an admin'); 
    } catch (error) {
      res.status(500).send('Error making user an admin'); 
    }
  });
  
module.exports = router;