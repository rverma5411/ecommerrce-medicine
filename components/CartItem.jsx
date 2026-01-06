import { useCart } from '@/context/CartContext'
import styles from '../styles/CartItem.module.css'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    }
  }

  const handleRemove = () => {
    if (confirm(`Remove ${item.name} from cart?`)) {
      removeFromCart(item.id)
    }
  }

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.category}>{item.category}</p>
        <p className={styles.dosage}>Dosage: {item.dosage}</p>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button onClick={handleDecrement} className={styles.quantityBtn}>-</button>
          <span className={styles.quantityValue}>{item.quantity}</span>
          <button onClick={handleIncrement} className={styles.quantityBtn}>+</button>
        </div>
        <p className={styles.subtotal}>
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button onClick={handleRemove} className={styles.removeBtn}>
          Remove
        </button>
      </div>
    </div>
  )
}
