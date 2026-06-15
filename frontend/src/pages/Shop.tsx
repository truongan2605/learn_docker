import { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="pricing" style={{ minHeight: '70vh' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
          <h2>Vạn Phúc Silk Collection</h2>
          <p>Select the piece that resonates with your daily rituals.</p>
        </div>

        <div className="shop-grid">
          {products.length === 0 ? (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>Loading collections or no products found...</p>
          ) : (
            products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image" style={{ background: 'transparent', padding: 0 }}>
                  {product.image_url ? (
                    <img src={product.image_url} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ color: 'var(--stone-grey-wabi)' }}>[Image Placeholder]</span>
                  )}
                </div>
                <h3 className="price-tier">{product.name}</h3>
                <div className="price-amount" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  ${product.price}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--stone-grey-wabi)', marginBottom: '1.5rem' }}>
                  {product.description}
                </p>
                <button className="btn btn-secondary" style={{ width: '100%' }}>Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
