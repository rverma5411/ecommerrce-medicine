import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import styles from '../styles/Header.module.css'

export default function Header() {
  const { getCartItemsCount } = useCart()
  const { user, logout } = useAuth()
  const cartItemsCount = getCartItemsCount()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>💊</span>
          <span className={styles.logoText}>MediStore</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
        </nav>

        <div className={styles.actions}>
          {user ? (
            <>
              <span className={styles.userName}>Hi, {user.name}</span>
              <button onClick={logout} className={styles.logoutBtn}>Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className={styles.authLink}>Login</Link>
              <Link href="/register" className={styles.authLink}>Register</Link>
            </>
          )}
          
          <Link href="/cart" className={styles.cartLink}>
            <span className={styles.cartIcon}>🛒</span>
            {cartItemsCount > 0 && (
              <span className={styles.cartBadge}>{cartItemsCount}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
