import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './AdminDashboard';
import ProductCard from './components/ProductCards';
import ProductDetail from './components/ProductDetail';

function App() {

  return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        
    </Router>
    </>
  )
}

export default App
