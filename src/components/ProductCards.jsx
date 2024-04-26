import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import db from '../firebase';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollectionRef = collection(db, 'products');
        const querySnapshot = await getDocs(productsCollectionRef);

        const fetchedProducts = [];
        querySnapshot.forEach((doc) => {
          fetchedProducts.push({ id: doc.id, ...doc.data() });
        });

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <Link to="/admin">
        <h2>Admin Panel</h2>
      </Link>
      <div className="product-list">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-link">
            <div className="product-card">
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-quantity">Quantity: {product.quantity}</p>
                <p className="product-description">{product.description}</p>
                {product.discount && <p className="product-discount">Discount: {product.discount}%</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
