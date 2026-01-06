import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartItem from '@/components/CartItem'
import styles from '@/styles/Cart.module.css'

export default function Cart() {
  const { cart, getCartTotal, clearCart } = useCart()
  const router = useRouter()
  const total = getCartTotal()
  const shipping = 5.99
  const tax = total * 0.08
  const grandTotal = total + shipping + tax

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      clearCart()
    }
  }

  const handleCheckout = () => {
    alert('Checkout feature coming soon!')
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyText}>Your cart is empty</p>
              <button onClick={() => router.push('/')} className={styles.shopButton}>
                Start Shopping
              </button>
            </div>
          ) : (
            <div className={styles.cartLayout}>
              <div className={styles.cartItems}>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
                <button onClick={handleClearCart} className={styles.clearButton}>
                  Clear Cart
                </button>
              </div>

              <div className={styles.summary}>
                <h2 className={styles.summaryTitle}>Order Summary</h2>
                <div className={styles.summaryRow}>
                  <span>Subtotal:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Shipping:</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Tax (8%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className={styles.summaryTotal}>
                  <span>Total:</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
                <button onClick={handleCheckout} className={styles.checkoutButton}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
