'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();

  const isAboutPage = pathname === '/about';

  return (
    <header
      className={clsx(styles.header, { [styles.headerFilled]: isAboutPage })}
    >
      <Image
        src="/wavy_navbar_logo.svg"
        alt="Wavy Navbar Logo"
        width={166}
        height={48}
      />
      <nav className={styles.navbar}>
        {/* TODO implement link paths once views are ready! */}
        <Link href="/" className={styles.link}>
          home
        </Link>
        {/* TODO Add services page and update the link! */}
        <Link href="/" className={styles.link}>
          services
        </Link>
        <Link href="/work" className={styles.link}>
          work
        </Link>
        <Link href="/about" className={styles.link}>
          about
        </Link>
      </nav>
    </header>
  );
}
