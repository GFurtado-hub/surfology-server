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
      { productId: '67f54a2bee223eb9f588b7c5', imageUrl: 'images/67f54a2bee223eb9f588b7c5.jpg' },
      { productId: '67f54a50ee223eb9f588b7c7', imageUrl: 'images/67f54a50ee223eb9f588b7c7.jpg' },
      { productId: '67f54a78ee223eb9f588b7c9', imageUrl: 'images/67f54a78ee223eb9f588b7c9.jpg' },
      { productId: '67f54a98ee223eb9f588b7cb', imageUrl: 'images/67f54a98ee223eb9f588b7cb.jpg' },
      { productId: '67f54ab1ee223eb9f588b7cd', imageUrl: 'images/67f54ab1ee223eb9f588b7cd.jpg' },
      { productId: '67f54b14ee223eb9f588b7cf', imageUrl: 'images/67f54b14ee223eb9f588b7cf.jpg' },
      { productId: '67f54b34ee223eb9f588b7d1', imageUrl: 'images/67f54b34ee223eb9f588b7d1.jpg' },
      { productId: '67f54b61ee223eb9f588b7d3', imageUrl: 'images/67f54b61ee223eb9f588b7d3.jpg' },
      { productId: '67f54b7fee223eb9f588b7d5', imageUrl: 'images/67f54b7fee223eb9f588b7d5.jpg' },
      { productId: '67f54b9bee223eb9f588b7d7', imageUrl: 'images/67f54b9bee223eb9f588b7d7.jpg' },
      { productId: '67f54c01ee223eb9f588b7d9', imageUrl: 'images/67f54c01ee223eb9f588b7d9.jpg' },
      { productId: '67f54c1bee223eb9f588b7db', imageUrl: 'images/67f54c1bee223eb9f588b7db.jpg' },
      { productId: '67f54c39ee223eb9f588b7dd', imageUrl: 'images/67f54c39ee223eb9f588b7dd.jpg' },
      { productId: '67f54c53ee223eb9f588b7df', imageUrl: 'images/67f54c53ee223eb9f588b7df.jpg' },
      { productId: '67f54cbeee223eb9f588b7e1', imageUrl: 'images/67f54cbeee223eb9f588b7e1.jpg' },
      { productId: '67f54cfcee223eb9f588b7e3', imageUrl: 'images/67f54cfcee223eb9f588b7e3.jpg' },
      { productId: '67f54d22ee223eb9f588b7e5', imageUrl: 'images/67f54d22ee223eb9f588b7e5.jpg' },
      { productId: '67f54d40ee223eb9f588b7e7', imageUrl: 'images/67f54d40ee223eb9f588b7e7.jpg' },
      { productId: '67f54d5dee223eb9f588b7e9', imageUrl: 'images/67f54d5dee223eb9f588b7e9.jpg' },
      { productId: '67f54d90ee223eb9f588b7eb', imageUrl: 'images/67f54d90ee223eb9f588b7eb.jpg' },
      { productId: '67f54f8aee223eb9f588b7ed', imageUrl: 'images/67f54f8aee223eb9f588b7ed.jpg' },
      { productId: '67f54fa5ee223eb9f588b7ef', imageUrl: 'images/67f54fa5ee223eb9f588b7ef.jpg' },
      { productId: '67f54fb7ee223eb9f588b7f1', imageUrl: 'images/67f54fb7ee223eb9f588b7f1.jpg' },
      { productId: '67f54fd5ee223eb9f588b7f3', imageUrl: 'images/67f54fd5ee223eb9f588b7f3.jpg' },
      { productId: '67f551deee223eb9f588b7f7', imageUrl: 'images/67f551deee223eb9f588b7f7.jpg' },
      
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