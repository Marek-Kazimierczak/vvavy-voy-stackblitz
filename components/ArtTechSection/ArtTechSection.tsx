'use client';

import React from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import styles from './ArtTechSection.module.scss';

const ArtTechSection: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.centerContent}>
        <h2 className={styles.heading}>art &amp; tech</h2>
        <div className={styles.textGroup}>
          <p>
            We specialize in procedural systems for animation &amp; geometry
            generation.
          </p>
          <p>
            With a creative approach to detail and the most powerful 3D tools at
            hand
          </p>
          <p>
            - we want to meet your needs - not with just one image, but with
            smart and meaningful visuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArtTechSection;
