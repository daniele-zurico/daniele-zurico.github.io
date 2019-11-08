import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import styles from "./header.module.css"
import FeaturedImage from "./featuredImage"
import ToggleDarkLight from "./toggleDarkLight"
const Header = ({ title, featuredImage = true }) => {
  React.useEffect(() => {
    const theme = localStorage.getItem("theme")
    console.log("theme", theme)
    if (!theme) {
      new Date().getTime() > 14
        ? localStorage.setItem("theme", "night")
        : localStorage.setItem("theme", "night")
    }
  }, [])

  return (
    <header className={!featuredImage ? styles.noFeaturedImage : null}>
      <div className={styles.fixedHeader}>
        <div>
          <Link to="/" className={styles.link}>
            Blog
          </Link>
          <Link to="/aboutMe" className={styles.link}>
            About Me
          </Link>
          <Link to="/contacts" className={styles.link}>
            Contacts
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
