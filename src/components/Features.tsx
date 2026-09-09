'use client';

import React from 'react';
import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Generate and verify OTPs in under 100ms with our optimized infrastructure',
  },
  {
    icon: '🔐',
    title: 'Enterprise Security',
    description: 'Military-grade encryption and compliance with GDPR, SOC 2, and ISO 27001',
  },
  {
    icon: '📱',
    title: 'Multi-Channel',
    description: 'Support for SMS, Email, Push Notifications, and TOTP applications',
  },
  {
    icon: '🔄',
    title: 'Seamless Integration',
    description: 'Easy-to-use REST API and SDKs for popular programming languages',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Detailed dashboards with success rates, latency metrics, and user insights',
  },
  {
    icon: '🛡️',
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring for your peace of mind',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why Choose BNS OTP King?</h2>
        <p className={styles.subheading}>Industry-leading features built for modern applications</p>
        
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
