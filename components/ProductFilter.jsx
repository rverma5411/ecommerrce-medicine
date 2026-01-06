import { useState } from 'react'
import styles from '../styles/ProductFilter.module.css'

export default function ProductFilter({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 50])

  const categories = ['All', 'Pain Relief', 'Antibiotics', 'Allergy', 'Digestive', 'Diabetes', 'Cardiovascular', 'Vitamins', 'Respiratory']

  const handleFilterChange = () => {
    onFilterChange({
      searchTerm,
      category: selectedCategory,
      priceRange
    })
  }

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onFilterChange({
      searchTerm: value,
      category: selectedCategory,
      priceRange
    })
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    onFilterChange({
      searchTerm,
      category,
      priceRange
    })
  }

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value)
    setPriceRange([0, value])
    onFilterChange({
      searchTerm,
      category: selectedCategory,
      priceRange: [0, value]
    })
  }

  return (
    <div className={styles.filter}>
      <h3 className={styles.title}>Filter Products</h3>

      <div className={styles.section}>
        <label className={styles.label}>Search</label>
        <input
          type="text"
          placeholder="Search medicines..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Category</label>
        <div className={styles.categoryButtons}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? styles.categoryActive : styles.categoryButton}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Price Range: $0 - ${priceRange[1]}</label>
        <input
          type="range"
          min="0"
          max="50"
          value={priceRange[1]}
          onChange={handlePriceChange}
          className={styles.priceSlider}
        />
      </div>
    </div>
  )
}
