import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.logo}>
        <Image
          src="/images/logo_7.png"
          alt="Miky7Art"
          width={634}
          height={800}
          priority
        />
      </div>

      <p className={styles.name}>MIKY7ART</p>

      <svg
        className={styles.stroke}
        viewBox="0 0 600 40"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="brush" x="-5%" y="-60%" width="110%" height="220%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.035 0.45"
              numOctaves="2"
              seed="7"
            />
            <feDisplacementMap in="SourceGraphic" scale="7" />
          </filter>
        </defs>
        <path
          className={styles.strokePath}
          d="M10 24 C 90 10, 170 32, 260 21 S 440 10, 590 22"
          pathLength={1}
          filter="url(#brush)"
        />
      </svg>

      <h1 className={styles.title}>Próximamente</h1>
      <p className={styles.subtitle}>Estamos trabajando en eso.</p>
    </main>
  );
}
