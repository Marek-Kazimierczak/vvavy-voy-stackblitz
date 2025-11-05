'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './MobileNav.module.scss';
import clsx from 'clsx';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <div className={styles.container}>
      <button onClick={toggle} className={styles.icon}>
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </button>

      {open && (
        <nav className={styles.dropdown}>
          <Link href="/" onClick={close} className={styles.link}>home</Link>
          <Link href="/services" onClick={close} className={clsx(styles.link, styles.disabledLink)} aria-disabled>services</Link>
          <Link href="/work" onClick={close} className={styles.link}>work</Link>
          <Link href="/about" onClick={close} className={styles.link}>about</Link>
        </nav>
      )}
    </div>
  );
}