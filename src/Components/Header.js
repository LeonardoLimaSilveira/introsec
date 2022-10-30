import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../images/logo.svg'
import Dropdown from './Dropdown'
import Item from './Nav'
import { ReactComponent as Todo } from '../images/icon-todo.svg'
import { ReactComponent as Arrowup } from '../images/icon-arrow-up.svg'
import { ReactComponent as Arrowdown } from '../images/icon-arrow-down.svg'
import { ReactComponent as Planning } from '../images/icon-planning.svg'
import { ReactComponent as Reminders } from '../images/icon-reminders.svg'
import { ReactComponent as Calendar } from '../images/icon-calendar.svg'
import { ReactComponent as IconMenu } from '../images/icon-menu.svg'
import { ReactComponent as IconClose } from '../images/icon-close-menu.svg'

const Header = () => {
  const [arrow, setArrow] = React.useState(false)
  const [arrow2, setArrow2] = React.useState(false)
  const [active, setActive] = React.useState(true)
  const [active2, setActive2] = React.useState(false)
  const [mobile, setMobile] = React.useState(false)

  function HandleClick() {
    setMobile(!mobile)
    setArrow2(false)
    setArrow(false)
  }
  function arrowChange() {
    setArrow(!arrow)
  }
  function arrowChange2() {
    setArrow2(!arrow2)
  }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={!mobile ? styles.headerLeft : styles.headerMob}>
        <nav>
          <div
            onClick={HandleClick}
            className={
              mobile
                ? `${styles.mobile} ${styles.active}  `
                : `${styles.mobile} ${styles.mobFix}`
            }
          >
            {!mobile ? <IconMenu /> : <IconClose />}
          </div>
          <div className={mobile ? styles.active : styles.ulNav}>
            <Item
              className={styles.ulItem}
              title={'Features'}
              onClick={arrowChange}
              icon={!arrow ? <Arrowdown /> : <Arrowup />}
            />
            {arrow && (
              <ul className={styles.ulDropdown}>
                <Dropdown
                  className={styles.dropdownClass}
                  icon={<Todo />}
                  title={'Features'}
                />

                <Dropdown
                  className={styles.dropdownClass}
                  icon={<Calendar />}
                  title={'Calendar'}
                />
                <Dropdown
                  className={styles.dropdownClass}
                  icon={<Reminders />}
                  title={'Reminders'}
                />
                <Dropdown
                  className={styles.dropdownClass}
                  icon={<Planning />}
                  title={'Planning'}
                />
              </ul>
            )}
          </div>
          <div
            className={
              mobile ? `${styles.ulItemSec} ${styles.active}` : styles.ulItemSec
            }
          >
            <Item
              title={'Company'}
              onClick={arrowChange2}
              icon={!arrow2 ? <Arrowdown /> : <Arrowup />}
            />
            {arrow2 && (
              <ul className={styles.ulDropdownSec}>
                <Dropdown
                  className={styles.dropdownClassSec}
                  title={'History'}
                />

                <Dropdown
                  className={styles.dropdownClassSec}
                  title={'Our team'}
                />
                <Dropdown className={styles.dropdownClassSec} title={'Blog'} />
              </ul>
            )}
          </div>
          <div className={mobile ? styles.active : styles.ulNav}>
            <Item title={'Carrers'} />
          </div>
          <div className={mobile ? styles.active : styles.ulNav}>
            <Item title={'About'} />
          </div>
        </nav>
        <div
          className={
            mobile ? `${styles.signup} ${styles.active}  ` : `${styles.signup}`
          }
        >
          <ul>
            <li
              onClick={() => {
                if (!active2) {
                  setActive2(true)
                  setActive(false)
                } else if (active) {
                  setActive2(true)
                }
              }}
              className={!active ? styles.loginActive : styles.login}
            >
              Login
            </li>
            <li
              onClick={() => {
                if (!active) {
                  setActive(true)
                  setActive2(false)
                } else if (active) {
                  setActive(true)
                }
              }}
              className={!active2 ? styles.loginActive : ''}
            >
              Register
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
