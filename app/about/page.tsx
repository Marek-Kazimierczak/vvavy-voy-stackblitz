import Image from 'next/image';

import styles from './AboutPage.module.scss';
import { Footer } from '../../components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
    <main className={styles.container}>
      <div>
        <h1>VVAVY</h1>

        <p>
          Specializing in CGI, Motion leveraging power of algorithmic designs
          and computational thinking.
        </p>
        <p>3 worlds meeting in one place is the studio</p>
      </div>
      <Image
        src="/3CIRCLES_ENG.png"
        alt="Team photo"
        width={800}
        height={600}
      />
    </main>
    <Footer />
    </>
  );
}
