'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './AnimatedLetters.module.scss';

type AnimatedLettersProps = {
  letters: string[];
  shouldAnimate: boolean;
};

export default function AnimatedLetters({
  letters,
  shouldAnimate,
}: AnimatedLettersProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldAnimate || !containerRef.current) return;

    const letterEls = gsap.utils.toArray(
      containerRef.current.querySelectorAll(`.${styles.letter}`)
    );

    // Reset and animate
    gsap.set(letterEls, {
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 1,
    });

    gsap.to(letterEls, {
      x: (i) => i * 100,
      stagger: 0.3,
      duration: 2,
      ease: 'power2.out',
    });
  }, [shouldAnimate]);

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={styles.inner}>
        {letters.map((char, i) => (
          <span key={i} className={styles.letter}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
