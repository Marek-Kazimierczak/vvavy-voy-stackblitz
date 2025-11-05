'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();

  const isAboutPage = pathname === '/about';

  return (
    <header
      className={clsx(styles.header, { [styles.headerFilled]: isAboutPage })}
    >
      <Link href="/" className={styles.link}>
        <Image
          src="/wavy_navbar_logo.svg"
          alt="Wavy Navbar Logo"
          width={166}
          height={48}
        />
      </Link>
      <MobileNav />
      <nav className={styles.navbar}>
        {/* TODO implement link paths once views are ready! */}
        <Link href="/" className={styles.link}>
          home
        </Link>
        {/* TODO Add services page and update the link! */}
        <Link href="/" className={clsx(styles.link, styles.disabledLink)}
          onClick={(e) => e.preventDefault()}
          aria-disabled="true">
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
