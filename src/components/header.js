import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import styles from "./header.module.css"
import FeaturedImage from "./featuredImage"
import ToggleDarkLight from "./toggleDarkLight"

const Header = ({ title, featuredImage = true }) => {
  React.useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (!theme) {
      new Date().getTime() > 14
        ? localStorage.setItem("theme", "night")
        : localStorage.setItem("theme", "night")
    }
  }, [])

  let currentRef = React.useRef(null)

  const animateActiveLink = evt => {
    currentRef.current = evt.currentTarget
  }
  return (
    <header className={!featuredImage ? styles.noFeaturedImage : null}>
      <div className={styles.fixedHeader}>
        <div className={styles.linkContainer}>
          <div
            className={[styles.slider].join(" ")}
            style={{
              width: currentRef.current ? currentRef.current.offsetWidth : 38,
              left: currentRef.current ? currentRef.current.offsetLeft : 40,
            }}
          />
          <Link to="/" className={styles.link} onClick={animateActiveLink}>
            <span>Blog</span>
          </Link>
          <Link
            to="aboutMe"
            className={styles.link}
            onClick={animateActiveLink}
          >
            <span>About Me</span>
          </Link>
          <Link
            to="contacts"
            className={styles.link}
            onClick={animateActiveLink}
          >
            <span>Contacts</span>
          </Link>
        </div>

        <div style={{ marginRight: "48px" }}>
          <ThemeToggler theme="light">
            {({ theme, toggleTheme }) => {
              return (
                <ToggleDarkLight
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />
              )
            }}
          </ThemeToggler>
        </div>
      </div>

      {featuredImage && <FeaturedImage className={styles.image} />}
    </header>
  )
}

export default Header
