import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { useSpring, animated } from "react-spring"
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

  let [el, setEl] = React.useState({ offsetWidth: 38, offsetLeft: 40 })
  const props = useSpring({
    width: el.offsetWidth,
    left: el.offsetLeft,
  })
  const animateActiveLink = evt => {
    setEl({
      offsetWidth: evt.currentTarget.offsetWidth,
      offsetLeft: evt.currentTarget.offsetLeft,
    })
  }
  return (
    <header className={!featuredImage ? styles.noFeaturedImage : null}>
      <div className={styles.fixedHeader}>
        <div className={styles.linkContainer}>
          <animated.div style={props} className={styles.slider} />
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
