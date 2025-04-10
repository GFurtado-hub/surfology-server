const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path to your Product model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Surfology', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const assignImagesToProducts = async () => {
  try {
    // Example: Array of images with matching product IDs
    const images = [
      { productId: '67f5451ee41726b0b7e57fc5', imageUrl: 'images/67f5451ee41726b0b7e57fc5.jpg' },
      { productId: '67f54a02ee223eb9f588b7c3', imageUrl: 'images/67f54a02ee223eb9f588b7c3.jpg' },
      // Add more image-product mappings here
    ];

    for (const { productId, imageUrl } of images) {
      // Update the product document with the image URL
      await Product.updateOne(
        { _id: productId }, // Match the product by its ID
        { $set: { image: imageUrl } } // Add or update the image field
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