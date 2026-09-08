import React from 'react';

export default function Home() {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '8px',
        padding: '3rem',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        maxWidth: '500px'
      }}>
        <h1 style={{ color: '#667eea', margin: '0 0 1rem 0' }}>🔐 BNS OTP King</h1>
        <p style={{ color: '#666', fontSize: '1.1rem', margin: '1rem 0' }}>
          Welcome to OTP Authentication Platform
        </p>
        <p style={{
          color: '#999',
          fontSize: '0.9rem',
          marginTop: '1.5rem',
          borderTop: '1px solid #eee',
          paddingTop: '1.5rem'
        }}>
          Next.js + TypeScript • Vercel Deployment Ready
        </p>
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            Get Started
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            color: '#667eea',
            border: '2px solid #667eea',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}>
            Documentation
          </button>
        </div>
      </div>
    </div>
  );
}