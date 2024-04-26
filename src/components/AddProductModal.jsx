// AddProductModal.jsx

import React, { useState } from 'react';
import Modal from 'react-modal';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import storage functions
import db from '../firebase';

const AddProductModal = ({ isOpen, onRequestClose }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    discount: '',
    imageUrl: '' // Store the URL of the uploaded image
  });
  const [imageFile, setImageFile] = useState(null); // Store the selected image file

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productsCollectionRef = collection(db, 'products');

      // Upload image to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `product_images/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);

      // Get download URL of the uploaded image
      const imageUrl = await getDownloadURL(storageRef);

      // Add product data to Firestore collection
      await addDoc(productsCollectionRef, { ...product, imageUrl });

      // Clear form fields after submission
      setProduct({
        name: '',
        price: '',
        quantity: '',
        description: '',
        discount: '',
        imageUrl: ''
      });
      setImageFile(null);

      // Close the modal
      onRequestClose();
      console.log('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Product Modal"
    >
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleInputChange} placeholder="Name" required />
        <input type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" required />
        <input type="number" name="quantity" value={product.quantity} onChange={handleInputChange} placeholder="Quantity" required />
        <textarea name="description" value={product.description} onChange={handleInputChange} placeholder="Description" required />
        <input type="number" name="discount" value={product.discount} onChange={handleInputChange} placeholder="Discount" />
        <input type="file" accept="image/*" onChange={handleImageChange} required /> {/* Image upload input */}
        <button type="submit">Add Product</button>
      </form>
    </Modal>
  );
};

export default AddProductModal;
