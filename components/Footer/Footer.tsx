import styles from './Footer.module.scss';
import Link from 'next/link';

import { InstagramIcon } from './InstagramIcon';
import MailIcon from './MailIcon';
import BehanceIcon from './BehanceIcon';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.heading}>Our creative journey starts here.</h2>

      <div className={styles.flexWrapper}>
        <div className={styles.contact}>
          <h3 className={styles.contactHeading}>contact</h3>
          <p>
            <strong>mail:</strong>{' '}
            <a href="mailto:hello@vvavy.io">hello@vvavy.io</a>
          </p>
          <p>
            <strong>tel.:</strong>{' '}
            <a href="tel:+48795869724">+48 795 869 724</a>
          </p>
          <p>
            <a
              href="https://vvavy.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.vvavy.io
            </a>
          </p>
        </div>
        {/* ICONS */}
        <div className={styles.icons}>
          <a href="mailto:hello@vvavy.io">
            <MailIcon size={66} className="text-black" />
          </a>
          <a href="https://behance.net" target="_blank">
            <BehanceIcon size={66} className="text-black" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <InstagramIcon size={66} className="text-black" />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <span>&copy;VVAVY {new Date().getFullYear()}.</span>
        {/* TODO Add Privacy Policy Page!!! and update link href */}
        <Link href="/">Privacy Policy</Link>
      </div>
    </footer>
  );
};
