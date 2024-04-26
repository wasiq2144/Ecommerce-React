import React , {useState} from 'react';
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Link to="/">
      <h2>All Products</h2>
      </Link>
            <button onClick={openModal}>Add Product</button>
      <AddProductModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <ProductList />
    </div>
  );
};

export default AdminDashboard;