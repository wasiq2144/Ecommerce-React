import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPanel from './AdminDashboard';
import ProductCard from './components/ProductCards';

function App() {

  return (
    <>
        <Router>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
