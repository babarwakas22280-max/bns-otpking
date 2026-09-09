'use client';

import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '1',
    title: 'Create Account',
    description: 'Sign up and get your API credentials in minutes',
  },
  {
    number: '2',
    title: 'Integrate API',
    description: 'Add our SDK to your application with just a few lines of code',
  },
  {
    number: '3',
    title: 'Send OTP',
    description: 'Generate and send OTPs through your preferred channel',
  },
  {
    number: '4',
    title: 'Verify & Complete',
    description: 'Verify the OTP and authenticate your users securely',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How It Works</h2>
        <p className={styles.subheading}>Simple, secure, and straightforward</p>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.arrow}>→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
