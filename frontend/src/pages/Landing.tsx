
import { Link } from 'react-router-dom';
import { Scissors, Sun, Leaf, Quote } from 'lucide-react';

export default function Landing() {
  return (
    <>
      <div className="kintsugi-line k-line-1"></div>
      <div className="kintsugi-line k-line-2"></div>

      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Weaving time and tradition.</h1>
            <p>Embracing the organic textures and the natural process of silk making from Vạn Phúc village. Beauty in every thread.</p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-primary">Explore Silk</Link>
              <a href="#craft" className="btn btn-secondary">Our Craft</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/img_4.png" alt="Vạn Phúc Silk Weaving" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', boxShadow: '2px 4px 24px rgba(54,69,79,0.15)', animation: 'morph 8s ease-in-out infinite alternate' }} />
            <div className="handwritten-note">"softness born from time"</div>
          </div>
        </div>
      </section>

      <section id="craft" className="features">
        <div className="container">
          <div className="section-header">
            <h2>The Art of Silk Weaving</h2>
            <p>Our approach honors the natural materials, allowing raw silk textures to define each piece's character.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card feature-card-large">
              <div>
                <Scissors className="feature-icon" />
                <h3>Wabi-Sabi Philosophy</h3>
                <p>We do not hide the natural irregularities of raw silk. Instead, we highlight them, treating them as authentic marks of handcrafted origin.</p>
              </div>
              <div style={{ background: 'rgba(139, 134, 128, 0.1)', height: '100%', minHeight: '200px', border: '1px solid var(--kintsugi-gold)', opacity: 0.5 }}></div>
            </div>
            
            <div className="feature-card">
              <Leaf className="feature-icon" />
              <h3>Organic Dyes</h3>
              <p>Muted palettes drawn directly from leaves, bark, and roots. Colors that breathe and rest quietly.</p>
            </div>
            
            <div className="feature-card">
              <Sun className="feature-icon" />
              <h3>Sun Dried</h3>
              <p>Dried naturally under the Vạn Phúc sun, capturing the warmth and energy of the environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'right', marginLeft: 'auto' }}>
            <h2>Echoes of Use</h2>
            <p>Reflections from those who wear our craft.</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <Quote className="quote-icon" />
              <p className="testimonial-text">"Wearing this silk feels grounding. The slight irregularity reminds me of its human touch."</p>
              <p className="testimonial-author">E. Caldwell</p>
            </div>
            
            <div className="testimonial-card">
              <Quote className="quote-icon" />
              <p className="testimonial-text">"The natural dye has faded beautifully over the years, becoming something truly my own."</p>
              <p className="testimonial-author">M. Lin</p>
            </div>
            
            <div className="testimonial-card">
              <Quote className="quote-icon" />
              <p className="testimonial-text">"Quiet, unassuming, yet incredibly present. These aren't just clothes, they are artifacts."</p>
              <p className="testimonial-author">J. Torres</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
