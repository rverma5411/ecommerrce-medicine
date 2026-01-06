import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.title}>About MediStore</h1>
            <p className={styles.subtitle}>
              Your trusted partner in health and wellness
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.text}>
              Founded in 2024, MediStore has been committed to providing quality medicines 
              and healthcare products to customers worldwide. We believe that everyone deserves 
              access to affordable, genuine medications delivered right to their doorstep.
            </p>
            <p className={styles.text}>
              Our team of licensed pharmacists and healthcare professionals work tirelessly 
              to ensure that every product we offer meets the highest standards of quality 
              and safety.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              To make healthcare accessible and affordable for everyone by providing a 
              convenient, reliable online pharmacy platform. We strive to bridge the gap 
              between patients and their medications, ensuring timely delivery and 
              exceptional customer service.
            </p>
          </section>

          <section className={styles.features}>
            <h2 className={styles.sectionTitle}>Why Choose Us</h2>
            <div className={styles.featureGrid}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✓</div>
                <h3 className={styles.featureTitle}>Genuine Products</h3>
                <p className={styles.featureText}>
                  All medicines sourced from authorized manufacturers
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🚚</div>
                <h3 className={styles.featureTitle}>Fast Delivery</h3>
                <p className={styles.featureText}>
                  Quick and reliable shipping to your doorstep
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>💰</div>
                <h3 className={styles.featureTitle}>Best Prices</h3>
                <p className={styles.featureText}>
                  Competitive prices and regular discounts
                </p>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔒</div>
                <h3 className={styles.featureTitle}>Secure Shopping</h3>
                <p className={styles.featureText}>
                  Your data is protected with industry-standard encryption
                </p>
              </div>
            </div>
          </section>

          <section className={styles.values}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <ul className={styles.valuesList}>
              <li className={styles.value}>
                <strong>Integrity:</strong> We maintain the highest ethical standards in all our operations
              </li>
              <li className={styles.value}>
                <strong>Quality:</strong> We never compromise on the quality of our products
              </li>
              <li className={styles.value}>
                <strong>Customer First:</strong> Your health and satisfaction are our top priorities
              </li>
              <li className={styles.value}>
                <strong>Innovation:</strong> We continuously improve our services to serve you better
              </li>
            </ul>
          </section>

          <section className={styles.cta}>
            <h2 className={styles.ctaTitle}>Ready to Experience Better Healthcare?</h2>
            <p className={styles.ctaText}>
              Start shopping with MediStore today and join thousands of satisfied customers.
            </p>
            <a href="/" className={styles.ctaButton}>
              Browse Medicines
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
