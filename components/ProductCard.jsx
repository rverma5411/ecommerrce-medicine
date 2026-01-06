import { useCart } from '@/context/CartContext'
import styles from '../styles/ProductCard.module.css'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.details}>
          <span className={styles.dosage}>Dosage: {product.dosage}</span>
          <span className={styles.manufacturer}>{product.manufacturer}</span>
        </div>
        <div className={styles.bottom}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.inStock ? (
            <button onClick={handleAddToCart} className={styles.addButton}>
              Add to Cart
            </button>
          ) : (
            <button className={styles.outOfStock} disabled>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
