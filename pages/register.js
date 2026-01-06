import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/AuthContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Auth.module.css'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long')
      return
    }

    const result = register(name, email, password)
    if (result.success) {
      router.push('/')
    } else {
      setError(result.error)
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Register</h1>
          <p className={styles.subtitle}>Create your MediStore account</p>

          {error && <div className={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                placeholder="Your full name"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="At least 6 characters"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                placeholder="Confirm your password"
              />
            </div>

            <button type="submit" className={styles.button}>
              Register
            </button>
          </form>

          <p className={styles.link}>
            Already have an account?{' '}
            <a href="/login" className={styles.linkText}>Login here</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
