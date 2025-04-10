const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('../models/product.model'); // Adjust the path to your Product model

const app = express();

// Serve static images from the 'images' directory in the backend
app.use('/config/images', express.static(path.join(__dirname, 'images')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/surfology', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Image URL format: http://localhost:5173/images/{imageFilename}.jpg
const assignImagesToProducts = async () => {
  try {
    const images = [
      { productId: '67f5451ee41726b0b7e57fc5', imageUrl: 'http://localhost:5005/images/67f5451ee41726b0b7e57fc5.jpg' },
      { productId: '67f54a02ee223eb9f588b7c3', imageUrl: 'http://localhost:5005/images/67f54a02ee223eb9f588b7c3.jpg' },
      { productId: '67f54a2bee223eb9f588b7c5', imageUrl: 'http://localhost:5005/images/67f54a2bee223eb9f588b7c5.jpg' },
      { productId: '67f54a50ee223eb9f588b7c7', imageUrl: 'http://localhost:5005/images/67f54a50ee223eb9f588b7c7.jpg' },
      { productId: '67f54a78ee223eb9f588b7c9', imageUrl: 'http://localhost:5005/images/67f54a78ee223eb9f588b7c9.jpg' },
      { productId: '67f54a98ee223eb9f588b7cb', imageUrl: 'http://localhost:5005/images/67f54a98ee223eb9f588b7cb.jpg' },
      { productId: '67f54ab1ee223eb9f588b7cd', imageUrl: 'http://localhost:5005/images/67f54ab1ee223eb9f588b7cd.jpg' },
      { productId: '67f54b14ee223eb9f588b7cf', imageUrl: 'http://localhost:5005/images/67f54b14ee223eb9f588b7cf.jpg' },
      { productId: '67f54b34ee223eb9f588b7d1', imageUrl: 'http://localhost:5005/images/67f54b34ee223eb9f588b7d1.jpg' },
      { productId: '67f54b61ee223eb9f588b7d3', imageUrl: 'http://localhost:5005/images/67f54b61ee223eb9f588b7d3.jpg' },
      { productId: '67f54b7fee223eb9f588b7d5', imageUrl: 'http://localhost:5005/images/67f54b7fee223eb9f588b7d5.jpg' },
      { productId: '67f54b9bee223eb9f588b7d7', imageUrl: 'http://localhost:5005/images/67f54b9bee223eb9f588b7d7.jpg' },
      { productId: '67f54c01ee223eb9f588b7d9', imageUrl: 'http://localhost:5005/images/67f54c01ee223eb9f588b7d9.jpg' },
      { productId: '67f54c1bee223eb9f588b7db', imageUrl: 'http://localhost:5005/images/67f54c1bee223eb9f588b7db.jpg' },
      { productId: '67f54c39ee223eb9f588b7dd', imageUrl: 'http://localhost:5005/images/67f54c39ee223eb9f588b7dd.jpg' },
      { productId: '67f54c53ee223eb9f588b7df', imageUrl: 'http://localhost:5005/images/67f54c53ee223eb9f588b7df.jpg' },
      { productId: '67f54cbeee223eb9f588b7e1', imageUrl: 'http://localhost:5005/images/67f54cbeee223eb9f588b7e1.jpg' },
      { productId: '67f54cfcee223eb9f588b7e3', imageUrl: 'http://localhost:5005/images/67f54cfcee223eb9f588b7e3.jpg' },
      { productId: '67f54d22ee223eb9f588b7e5', imageUrl: 'http://localhost:5005/images/67f54d22ee223eb9f588b7e5.jpg' },
      { productId: '67f54d40ee223eb9f588b7e7', imageUrl: 'http://localhost:5005/images/67f54d40ee223eb9f588b7e7.jpg' },
      { productId: '67f54d5dee223eb9f588b7e9', imageUrl: 'http://localhost:5005/images/67f54d5dee223eb9f588b7e9.jpg' },
      { productId: '67f54d90ee223eb9f588b7eb', imageUrl: 'http://localhost:5005/images/67f54d90ee223eb9f588b7eb.jpg' },
      { productId: '67f54f8aee223eb9f588b7ed', imageUrl: 'http://localhost:5005/images/67f54f8aee223eb9f588b7ed.jpg' },
      { productId: '67f54fa5ee223eb9f588b7ef', imageUrl: 'http://localhost:5005/images/67f54fa5ee223eb9f588b7ef.jpg' },
      { productId: '67f54fb7ee223eb9f588b7f1', imageUrl: 'http://localhost:5005/images/67f54fb7ee223eb9f588b7f1.jpg' },
      { productId: '67f54fd5ee223eb9f588b7f3', imageUrl: 'http://localhost:5005/images/67f54fd5ee223eb9f588b7f3.jpg' },
      { productId: '67f551deee223eb9f588b7f7', imageUrl: 'http://localhost:5005/images/67f551deee223eb9f588b7f7.jpg' },
      
      // Add more image-product mappings here
    ];

    for (const { productId, imageUrl } of images) {
      // Update the product document with the image URL
      await Product.updateOne(
        { _id: productId },
        { $push: { images: imageUrl } } // Push the image URL into the images array
      );
    }

    console.log('Images assigned to products successfully!');
  } catch (error) {
    console.error('Error assigning images:', error);
  } finally {
    mongoose.connection.close();
  }
};

assignImagesToProducts();

app.listen(5005, () => {
  console.log('Server is running on http://localhost:5005');
});
