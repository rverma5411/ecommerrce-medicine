import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Accordion from '@/components/Accordion'
import { faqData } from '@/data/faqData'
import styles from '@/styles/FAQ.module.css'

export default function FAQ() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <p className={styles.subtitle}>
              Find answers to common questions about our services
            </p>
          </section>

          <section className={styles.faqSection}>
            <Accordion items={faqData} />
          </section>

          <section className={styles.contact}>
            <h2 className={styles.contactTitle}>Still Have Questions?</h2>
            <p className={styles.contactText}>
              Our customer support team is here to help you.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>Email:</strong> support@medistore.com
              </div>
              <div className={styles.contactItem}>
                <strong>Phone:</strong> 1-800-MEDI-HELP
              </div>
              <div className={styles.contactItem}>
                <strong>Hours:</strong> Monday - Friday, 9am - 6pm EST
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
