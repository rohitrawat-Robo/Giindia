import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" style={{ padding: '80px 20px', textAlign: 'center', background: '#f8fafc' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        <p style={{ color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>
          Welcome to GI
        </p>
        <h1 style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '24px', color: '#0f172a' }}>
          Build modern experiences with a bold design system
        </h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto 36px', color: '#475569' }}>
          Launch your next project faster with a polished hero section, crafted for clarity and conversion. Great for landing pages, product showcases, and creative campaigns.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#get-started" style={{ display: 'inline-block', padding: '14px 32px', background: '#1d4ed8', color: '#fff', borderRadius: '999px', textDecoration: 'none', fontWeight: '600' }}>
            Get Started
          </a>
          <a href="#learn-more" style={{ display: 'inline-block', padding: '14px 32px', background: '#e2e8f0', color: '#0f172a', borderRadius: '999px', textDecoration: 'none', fontWeight: '600' }}>
            Learn More
          </a>
        </div>
        <div style={{ marginTop: '56px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '760px', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(15, 23, 42, 0.12)' }}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
              alt="Hero illustration"
              style={{ width: '100%', display: 'block', objectFit: 'cover', minHeight: '320px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
