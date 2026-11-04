import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.logo}>
        <Image
          src="/images/logo_miky7art_m7a.png"
          alt="Miky7Art"
          width={6184}
          height={4693}
          priority
        />
      </div>

      <div className={styles.line} aria-hidden="true" />

      <h1 className={styles.title}>Próximamente</h1>
      <p className={styles.subtitle}>Estamos trabajando en eso.</p>
    </main>
  );
}
