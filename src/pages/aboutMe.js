import React from "react"
import { SEO, SectionTitle } from "../components"
import { useSite } from "../hooks/useSite"
import styles from "./aboutMe.module.css"
import imgBS from "../images/blackSwan.png"
import { auto } from "eol"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
const AboutMe = () => {
  const site = useSite()
  return (
    <>
      <SEO title="About me" site={site} />
      <SectionTitle title="About Me" />
      <div>
        <p>
          <span>HI</span>,
          <p>
            My name is
            <span style={{ color: "#f53b57", fontWeight: "bold" }}>
              {" "}
              DANIELE ZURICO{" "}
            </span>
            and I am a <span>Software Engineer.</span>
          </p>
        </p>
        <p style={{ textAlign: "justify" }}>
          I've over 10 years experience across all spheres of web-application
          development: analysis, design, coding and testing using both proven
          technologies and frontier technologies. An intensely inquisitive mind,
          resolute, versatile, computer science and programming enthusiast, I
          love writing in multiple coding languages. Experience with building
          high traffic and reliable websites, CMS systems and E-Commerce
          applications. Primary commercial experience has been with JavaScript
          OOP, AngularJs, JQuery, Ajax and JSP although I also have a working
          knowledge of Java web application frameworks and Flex applications.
        </p>
      </div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        WORK EXPERIENCE
      </h2>
      <div>
        <div className={styles.timeline}>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.content}>
              <h4>Senior Technical Architect (2019 - Actual)</h4>
              <section className={styles.stage}>
                <figure className={[styles.ball, styles.bubble].join(" ")}>
                  <img
                    width="130px"
                    alt="capgemini"
                    src="https://www.capgemini.com/gb-en/wp-content/themes/capgemini-komposite/assets/images/logo.svg"
                  ></img>
                </figure>
              </section>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={[styles.content, styles.contentRight].join(" ")}>
              <h4>Lead Frontend Developer (2018 - 2019)</h4>
              <section className={[styles.stage, styles.stageLeft].join(" ")}>
                <figure className={[styles.ball, styles.bubble].join(" ")}>
                  <img
                    width="120px"
                    alt="gohenry"
                    src="https://app.gohenry.com/uk/assets/img/go-logo.svg"
                  ></img>
                </figure>
              </section>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.content}>
              <h4>Lead Frontend developer (2014 - 2018)</h4>
              <section className={styles.stage}>
                <figure className={[styles.ball, styles.bubble].join(" ")}>
                  <img
                    width="110px"
                    style={{ margin: "auto" }}
                    alt="blackswan data"
                    src={imgBS}
                  ></img>
                </figure>
              </section>
            </div>
          </div>
          <div className={[styles.container, styles.right].join(" ")}>
            <div className={[styles.content, styles.contentRight].join(" ")}>
              <h4>Senior Frontend Developer (2009 - 2014)</h4>
              <section className={[styles.stage, styles.stageLeft].join(" ")}>
                <figure className={[styles.ball, styles.bubble].join(" ")}>
                  <img
                    width="130px"
                    height="57px"
                    style={{ margin: "auto" }}
                    alt="wirex"
                    src="https://www.wirex.it/wp-content/uploads/2015/04/logo.png"
                  ></img>
                </figure>
              </section>
            </div>
          </div>
          <div className={[styles.container, styles.left].join(" ")}>
            <div className={styles.content}>
              <h4>Junior Frontend Developer (2007 - 2009)</h4>
              <section className={styles.stage}>
                <figure className={[styles.ball, styles.bubble].join(" ")}>
                  <p
                    style={{
                      margin: "auto",
                      color: "black",
                      fontSize: "23px",
                      fontWeight: "bold",
                    }}
                  >
                    Solution srl
                  </p>
                </figure>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
