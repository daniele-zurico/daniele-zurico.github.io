import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import FeaturedImage from "./featuredImage"
const Header = ({ title, featuredImage = true }) => (
  <header className={!featuredImage ? styles.noFeaturedImage : null}>
    <div className={styles.fixedHeader}>
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
    {featuredImage && <FeaturedImage className={styles.image} />}

    {/* <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                checked={theme === "dark"}
              />
              Dark mode
            </label>
          )}
        </ThemeToggler> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
