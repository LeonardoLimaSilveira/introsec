import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://github.com/LeonardoLimaSilveira" target="_blank">
        Leonardo de Lima Silveira
      </a>
      .
    </div>
  )
}

export default Footer
