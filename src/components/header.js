import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { useSpring, animated } from "react-spring"
import styles from "./header.module.css"
import FeaturedImage from "./featuredImage"
import ToggleDarkLight from "./toggleDarkLight"

const Header = ({ location }) => {
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
  const blogRef = React.useRef()
  const aboutRef = React.useRef()
  const contactRef = React.useRef()
  React.useEffect(() => {
    switch (location) {
      case "/aboutMe":
        setEl({
          offsetWidth: aboutRef.current.offsetWidth,
          offsetLeft: aboutRef.current.offsetLeft + 5,
        })
        break
      case "/contacts":
        setEl({
          offsetWidth: contactRef.current.offsetWidth,
          offsetLeft: contactRef.current.offsetLeft + 10,
        })
        break
      default:
        setEl({
          offsetWidth: blogRef.current.offsetWidth,
          offsetLeft: blogRef.current.offsetLeft,
        })
        break
    }
  }, [])
  return (
    <header>
      <div className={styles.fixedHeader}>
        <div className={styles.linkContainer}>
          <animated.div style={props} className={styles.slider} />
          <Link
            ref={blogRef}
            to="/"
            className={styles.link}
            onClick={animateActiveLink}
          >
            <span>Blog</span>
          </Link>
          <Link
            ref={aboutRef}
            to="/aboutMe"
            className={styles.link}
            onClick={animateActiveLink}
          >
            <span>About Me</span>
          </Link>
          <Link
            ref={contactRef}
            to="/contacts"
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

      <FeaturedImage className={styles.image} />
    </header>
  )
}

export default Header
