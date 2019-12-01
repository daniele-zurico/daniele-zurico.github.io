import { Link } from "gatsby"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { useSpring, animated } from "react-spring"
import styles from "./header.module.css"
import FeaturedImage from "./featuredImage"
import ToggleDarkLight from "./toggleDarkLight"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
// import Search from "./search"
// import { graphql, StaticQuery } from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSearch } from "@fortawesome/free-solid-svg-icons"
const Header = ({ isBlogPage, location }) => {
  let [el, setEl] = React.useState({ offsetWidth: 0, offsetLeft: 0 })
  console.log(location)
  const [noHeader, setNoHeader] = React.useState(false)

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
          <div className={styles.togglerContainer}>
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
          {/* <StaticQuery
            query={graphql`
              query SearchIndexQuery {
                siteSearchIndex {
                  index
                }
              }
            `}
            render={data => {
              return (
                <div style={{ fontSize: "20px" }}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ cursor: "pointer" }}
                  />
                </div>

                // <Search searchIndex={data.siteSearchIndex.index} />
              )
            }}
          /> */}
        </div>
      </div>

      {!isBlogPage && (
        <FeaturedImage className={styles.image} imageRef={imageRef} />
      )}
    </header>
  )
}

export default Header
