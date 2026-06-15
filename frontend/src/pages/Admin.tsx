import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const fetchProducts = () => {
    fetch('/api/products')
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          window.location.href = '/login';
        }
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = { name, price: Number(price), description, image_url: '' };
    
    fetch('/api/products', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(() => {
        setName('');
        setPrice('');
        setDescription('');
        fetchProducts();
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id: number) => {
    fetch(`/api/products/${id}`, { 
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(() => fetchProducts())
      .catch(err => console.error(err));
  };

  return (
    <section className="features" style={{ minHeight: '70vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>Product Management</h2>
          <p>Admin panel to manage your silk collection.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
          <div className="feature-card" style={{ height: 'fit-content' }}>
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Product Name</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={e => setName(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--stone-grey-wabi)', background: 'transparent', color: 'var(--charcoal-wabi)' }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Price ($)</label>
                <input 
                  type="number" 
                  value={price} 
                  onChange={e => setPrice(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--stone-grey-wabi)', background: 'transparent', color: 'var(--charcoal-wabi)' }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Description</label>
                <textarea 
                  value={description} 
                  onChange={e => setDescription(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid var(--stone-grey-wabi)', background: 'transparent', color: 'var(--charcoal-wabi)', minHeight: '100px' }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
          </div>

          <div className="feature-card" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
            <h3>Current Products</h3>
            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.name}</td>
                      <td>${p.price}</td>
                      <td>
                        <button 
                          onClick={() => handleDelete(p.id)}
                          style={{ background: 'none', border: 'none', color: '#c62828', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr>
                      <td colSpan={4} style={{ textAlign: 'center', color: 'var(--stone-grey-wabi)' }}>No products found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
