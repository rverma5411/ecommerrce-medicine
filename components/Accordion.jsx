import { useState } from 'react'
import styles from '../styles/Accordion.module.css'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            onClick={() => toggleAccordion(index)}
            className={styles.question}
          >
            <span>{item.question}</span>
            <span className={styles.icon}>
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className={styles.answer}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
