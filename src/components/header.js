import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { useSpring, animated } from "react-spring"
import styles from "./header.module.css"
import FeaturedImage from "./featuredImage"
import ToggleDarkLight from "./toggleDarkLight"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Header = ({ location }) => {
  let [el, setEl] = React.useState({ offsetWidth: 0, offsetLeft: 0 })

  const [darkHeader, setDarkHeader] = React.useState(false)
  const imageRef = React.useRef()

  const changePosition =
    imageRef.current && imageRef.current.imageRef.current.height

  useScrollPosition(
    ({ currPos }) => {
      ;-currPos.y - currPos.y < changePosition - 30
        ? setDarkHeader(false)
        : setDarkHeader(true)
    },
    [darkHeader]
  )

  React.useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (!theme) {
      new Date().getTime() > 14
        ? localStorage.setItem("theme", "night")
        : localStorage.setItem("theme", "day")
    }
  }, [])

  // position the active element on page load
  const measuredRef = React.useCallback(
    node => {
      setTimeout(() => {
        if (node !== null && node.attributes["href"].value === location) {
          const { offsetWidth, offsetLeft } = node
          setEl({ offsetWidth, offsetLeft })
        }
      }, 200)
    },
    [location]
  )

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
    <header>
      <div
        className={styles.fixedHeader}
        style={{
          backgroundColor: darkHeader ? "#1e272d" : "rgba(30, 39, 46, 0.7)",
        }}
      >
        <div className={styles.linkContainer}>
          <animated.div style={props} className={styles.slider} />
          <Link
            ref={measuredRef}
            to="/"
            className={styles.link}
            onClick={animateActiveLink}
          >
            <span>Blog</span>
          </Link>
          <Link
            ref={measuredRef}
            to="/aboutMe"
            className={styles.link}
            onClick={animateActiveLink}
          >
            <span>About Me</span>
          </Link>
          <Link
            ref={measuredRef}
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

      <FeaturedImage className={styles.image} imgRef={imageRef} />
    </header>
  )
}

export default Header
