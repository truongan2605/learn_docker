import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setRole }: { setRole: (role: string | null) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        setRole(data.role);
        navigate(data.role === 'admin' ? '/admin' : '/shop');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <section className="features" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="feature-card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ fontSize: 'var(--h2-scale)', marginBottom: '1.5rem', textAlign: 'center' }}>Studio Login</h2>
        {error && <p style={{ color: '#c62828', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--stone-grey-wabi)', background: 'transparent', color: 'var(--charcoal-wabi)' }}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--stone-grey-wabi)', background: 'transparent', color: 'var(--charcoal-wabi)' }}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Enter</button>
        </form>
      </div>
    </section>
  );
}
