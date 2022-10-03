import { Link } from "gatsby"
import React from "react"
//import useDarkMode from 'use-dark-mode';
import { useSpring, animated } from "react-spring"
import * as styles from "./header.module.css"
import FeaturedImage from "./featuredImage"
// import ToggleDarkLight from "./toggleDarkLight"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Header = ({ isBlogPage, location }) => {
  let [el, setEl] = React.useState({ offsetWidth: 0, offsetLeft: 0 });
  const [noHeader, setNoHeader] = React.useState(false);

  //const darkMode = useDarkMode(false);

  React.useEffect(() => {
    setNoHeader(location && location.includes("/blog/"))
  }, [location])
  const [darkHeader, setDarkHeader] = React.useState(false)
  const imageRef = React.useRef()

  const changePosition = imageRef.current
    ? imageRef.current.imageRef.current.height
    : 300

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
    <header className={noHeader ? styles.headerNoImg : null}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <div className={styles.togglerContainer}>
            <ToggleDarkLight
              onChange={darkMode.toggle}
              checked={darkMode.enable}
            />
          </div> */}
        </div>
      </div>

      {!isBlogPage && (
        <FeaturedImage className={styles.image} imageRef={imageRef} />
      )}
    </header>
  )
}

export default Header
