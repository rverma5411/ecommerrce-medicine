import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import ProductFilter from '@/components/ProductFilter'
import { medicines } from '@/data/medicines'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(medicines)

  const handleFilterChange = (filters) => {
    let filtered = medicines

    // Search filter
    if (filters.searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
    }

    // Category filter
    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(product => product.category === filters.category)
    }

    // Price filter
    if (filters.priceRange) {
      filtered = filtered.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      )
    }

    setFilteredProducts(filtered)
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to MediStore</h1>
          <p className={styles.heroSubtitle}>Your trusted online pharmacy for quality medicines</p>
        </div>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <ProductFilter onFilterChange={handleFilterChange} />
          </aside>

          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Medicines</h2>
            {filteredProducts.length > 0 ? (
              <div className={styles.grid}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <p>No medicines found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
