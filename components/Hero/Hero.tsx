import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

import styles from './Hero.module.scss';

export const Hero = ({ shouldAnimate }: { shouldAnimate: boolean }) => {
  // TODO Update Hero component to match design!

  const brandLetters = ['V', 'V', 'A', 'V', 'Y'];

  return (
    <article className={styles.container}>
      <AnimatedLetters shouldAnimate letters={brandLetters} />
      <div className={styles.textGroup}>
        <p>Visuals powered by algorithms.</p>
        <p>Animation, 3D rendering and simulation.</p>
        <p>Creative production that push boundaries of imagination.</p>
      </div>
    </article>
  );
};
