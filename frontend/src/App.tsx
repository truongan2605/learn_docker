import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import Login from './pages/Login';

function Navbar({ role, onLogout }: { role: string | null, onLogout: () => void }) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          Vạn Phúc Silk
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          {role === 'admin' && <Link to="/admin">Admin</Link>}
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {role ? (
            <button onClick={onLogout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Logout</button>
          ) : (
            <Link to="/login" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', border: 'none' }}>Login</Link>
          )}
          <Link to="/shop" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            View Collection
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ color: 'var(--cream-wabi)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Vạn Phúc Silk
            </div>
            <p>Traditional silk weaving reflecting the authentic beauty of Vạn Phúc village.</p>
          </div>
          <div className="footer-col">
            <h4>Studio</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">The Process</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Vạn Phúc Silk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [role, setRole] = useState<string | null>(localStorage.getItem('role'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setRole(null);
    window.location.href = '/login';
  };

  return (
    <Router>
      <div className="wabi-bg">
        <Navbar role={role} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login setRole={setRole} />} />
          <Route 
            path="/admin" 
            element={role === 'admin' ? <Admin /> : <Navigate to="/login" replace />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
