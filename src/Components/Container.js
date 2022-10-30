import React from 'react'
import styles from './Container.module.css'
import { ReactComponent as Partner2 } from '../images/client-audiophile.svg'
import { ReactComponent as Partner1 } from '../images/client-databiz.svg'
import { ReactComponent as Partner3 } from '../images/client-maker.svg'
import { ReactComponent as Partner4 } from '../images/client-meet.svg'
import ContainerImg from '../images/image-hero-desktop.png'

const Container = () => {
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.mainContent}>
          <div className={styles.contentLeft}>
            <h1>Make remote work</h1>
            <p>
              Get your team in sync,no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button>Learn more </button>
            <div className={styles.partners}>
              <Partner1 />
              <Partner2 />
              <Partner3 />
              <Partner4 />
            </div>
          </div>
          <div className={styles.contentRight}>
            <img src={ContainerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
