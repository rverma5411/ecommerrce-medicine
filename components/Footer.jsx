import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.title}>MediStore</h3>
          <p className={styles.description}>
            Your trusted online pharmacy for quality medicines and healthcare products.
          </p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.subtitle}>Quick Links</h4>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about" className={styles.link}>About Us</Link>
          <Link href="/faq" className={styles.link}>FAQ</Link>
          <Link href="/cart" className={styles.link}>Cart</Link>
        </div>

        <div className={styles.section}>
          <h4 className={styles.subtitle}>Customer Service</h4>
          <Link href="/faq" className={styles.link}>Help Center</Link>
          <Link href="/about" className={styles.link}>Shipping Info</Link>
          <Link href="/about" className={styles.link}>Returns</Link>
          <Link href="/about" className={styles.link}>Privacy Policy</Link>
        </div>

        <div className={styles.section}>
          <h4 className={styles.subtitle}>Contact Us</h4>
          <p className={styles.contact}>Email: support@medistore.com</p>
          <p className={styles.contact}>Phone: 1-800-MEDI-HELP</p>
          <p className={styles.contact}>Hours: Mon-Fri 9am-6pm EST</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 MediStore. All rights reserved.</p>
      </div>
    </footer>
  )
}
